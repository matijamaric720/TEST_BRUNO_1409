import crypto from 'crypto';

const MYPOS_CONFIG = {
  ipcUrl: process.env.MYPOS_SANDBOX === 'true' 
    ? 'https://mypos.com/vmp/checkout-test/' 
    : 'https://mypos.com/vmp/checkout/',
  sid: process.env.MYPOS_SID,
  walletNumber: process.env.MYPOS_WALLET_NUMBER,
  keyIndex: process.env.MYPOS_KEY_INDEX || '1',
  okUrl: process.env.MYPOS_OK_URL,
  cancelUrl: process.env.MYPOS_CANCEL_URL,
  notifyUrl: process.env.MYPOS_NOTIFY_URL,
  version: '1.4',
  language: 'en'
};

// Function to create proper MyPOS signature
function createMyPOSSignature(data) {
  try {
    const privateKey = process.env.MYPOS_PRIVATE_KEY;
    if (!privateKey) {
      console.error('Private key not found in environment');
      throw new Error('Private key not configured');
    }

    // Remove signature field if present and create ordered data string
    const { Signature, ...dataWithoutSignature } = data;
    
    // MyPOS requires specific order and concatenation with '-'
    const concatenatedData = Object.values(dataWithoutSignature).join('-');
    console.log('Data to sign:', concatenatedData);
    
    // Base64 encode the concatenated string
    const base64Data = Buffer.from(concatenatedData, 'utf8').toString('base64');
    console.log('Base64 encoded data:', base64Data);
    
    // Sign with SHA256 and private key
    const sign = crypto.createSign('SHA256');
    sign.update(base64Data);
    const signature = sign.sign(privateKey, 'base64');
    
    console.log('Generated signature:', signature);
    return signature;
  } catch (error) {
    console.error('Error creating signature:', error);
    throw new Error('Failed to create signature: ' + error.message);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      amount, 
      currency = 'EUR', 
      firstName, 
      lastName, 
      email, 
      phone, 
      passengersCount = 1, 
      luggageCount = 1, 
      notes 
    } = req.body;

    console.log('=== MyPOS CHECKOUT REQUEST ===');
    console.log('Request data:', { amount, currency, firstName, lastName, email, phone });

    // Validate required fields
    if (!amount || !firstName || !lastName || !email) {
      return res.status(400).json({ 
        error: 'Missing required fields: amount, firstName, lastName, email' 
      });
    }

    // Validate environment configuration
    if (!MYPOS_CONFIG.sid || !MYPOS_CONFIG.walletNumber) {
      console.error('MyPOS configuration missing:', MYPOS_CONFIG);
      return res.status(500).json({ error: 'MyPOS configuration incomplete' });
    }

    // Generate unique order ID
    const orderId = `RIDE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const finalAmount = parseFloat(amount).toFixed(2);

    console.log('Generated Order ID:', orderId);
    console.log('Final Amount:', finalAmount);

    const checkoutData = {
      IPCmethod: 'IPCPurchase',
      IPCVersion: MYPOS_CONFIG.version,
      IPCLanguage: 'EN', // Should be 'EN' not 'en'
      SID: MYPOS_CONFIG.sid,
      walletnumber: MYPOS_CONFIG.walletNumber,
      KeyIndex: MYPOS_CONFIG.keyIndex,
      Source: '',
      
      // Order details
      OrderID: orderId,
      Amount: finalAmount,
      Currency: currency,
      
      // Customer details - all lowercase
      customeremail: email,
      customerphone: phone || '',
      customerfirstnames: firstName,
      customerfamilyname: lastName,
      customercountry: 'BGR',
      
      // URLs
      URL_OK: MYPOS_CONFIG.okUrl,
      URL_Cancel: MYPOS_CONFIG.cancelUrl,
      URL_Notify: MYPOS_CONFIG.notifyUrl,
      
      // Payment settings - all strings
      CardTokenRequest: '0',
      PaymentParametersRequired: '1',
      PaymentMethod: '1',
      
      // Cart details - all strings
      CartItems: '1',
      Article_1: 'Transportation Service',
      Quantity_1: passengersCount.toString(),
      Price_1: finalAmount,
      Amount_1: finalAmount,
      Currency_1: currency,
      
      // Additional
      Note: notes || `Transportation for ${passengersCount} passengers`
    };

    console.log('Checkout data before signature:', checkoutData);

    // Create signature with actual private key
    try {
      checkoutData.Signature = createMyPOSSignature(checkoutData);
      console.log('Signature created successfully');
    } catch (signError) {
      console.error('Signature creation failed:', signError);
      return res.status(500).json({ 
        error: 'Failed to create payment signature',
        details: signError.message 
      });
    }

    console.log('Final checkout data with signature:', {
      ...checkoutData,
      Signature: checkoutData.Signature.substring(0, 20) + '...' // Only show first 20 chars for security
    });

    // Return the form data and URL for frontend submission
    res.status(200).json({
      success: true,
      checkoutUrl: MYPOS_CONFIG.ipcUrl,
      formData: checkoutData,
      orderId: orderId,
      debug: {
        environment: process.env.MYPOS_SANDBOX === 'true' ? 'sandbox' : 'production',
        urls: {
          checkout: MYPOS_CONFIG.ipcUrl,
          success: MYPOS_CONFIG.okUrl,
          cancel: MYPOS_CONFIG.cancelUrl,
          notify: MYPOS_CONFIG.notifyUrl
        }
      }
    });

  } catch (error) {
    console.error('=== MyPOS CHECKOUT ERROR ===');
    console.error('Error details:', error);
    res.status(500).json({ 
      error: 'Failed to create MyPOS checkout',
      details: error.message 
    });
  }
}