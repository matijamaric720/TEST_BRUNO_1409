// app/api/mypos/mypos-checkout/route.js
import { NextResponse } from 'next/server';
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
  language: 'EN'
};

// EXACT signature process matching your working test
function createMyPOSSignature(postData) {
  try {
    const privateKey = process.env.MYPOS_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('Private key not configured');
    }

    // Step 1: Remove Signature field
    const { Signature, ...dataWithoutSignature } = postData;
    
    // Step 2: Concatenate all values with '-'
    const concatenatedValues = Object.values(dataWithoutSignature).join('-');
    
    // Step 3: Base64 encode
    const base64EncodedData = Buffer.from(concatenatedValues, 'utf8').toString('base64');
    
    // Step 4: Sign with SHA256
    const signer = crypto.createSign('SHA256');
    signer.update(base64EncodedData, 'utf8');
    signer.end();
    const binarySignature = signer.sign(privateKey);
    
    // Step 5: Base64 encode the signature
    const finalSignature = binarySignature.toString('base64');
    
    console.log('Signature created, length:', finalSignature.length);
    return finalSignature;

  } catch (error) {
    console.error('Signature generation error:', error);
    throw new Error('Signature creation failed: ' + error.message);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
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
    } = body;

    console.log('=== MyPOS CHECKOUT REQUEST ===');
    console.log('Input:', { amount, currency, firstName, lastName, email });

    // Validate required fields
    if (!amount || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, firstName, lastName, email' },
        { status: 400 }
      );
    }

    // Generate order ID
    const orderId = `RIDE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const finalAmount = parseFloat(amount).toFixed(2);

    // CRITICAL: Use EXACT same structure as your working test
    const postData = {
      IPCmethod: 'IPCPurchase',
      IPCVersion: '1.4',
      IPCLanguage: 'EN',
      SID: MYPOS_CONFIG.sid,
      walletnumber: MYPOS_CONFIG.walletNumber,
      Amount: finalAmount,
      Currency: currency,
      OrderID: orderId,
      URL_OK: MYPOS_CONFIG.okUrl,
      URL_Cancel: MYPOS_CONFIG.cancelUrl,
      URL_Notify: MYPOS_CONFIG.notifyUrl,
      CardTokenRequest: '0',
      KeyIndex: MYPOS_CONFIG.keyIndex,
      PaymentParametersRequired: '1',
      PaymentMethod: '1',
      customeremail: email,
      customerfirstnames: firstName,
      customerfamilyname: lastName,
      customerphone: phone || '',
      customercountry: 'BGR',
      Note: notes || 'Transportation service',
      Source: '',
      CartItems: '1',
      Article_1: 'Transportation Service',
      Quantity_1: passengersCount.toString(),
      Price_1: finalAmount,
      Currency_1: currency,
      Amount_1: finalAmount
    };

    console.log('Parameters prepared:', Object.keys(postData).length);

    // Generate signature using same process as working test
    try {
      const signature = createMyPOSSignature(postData);
      postData.Signature = signature;
      console.log('✅ Signature added successfully');
    } catch (signError) {
      console.error('❌ Signature failed:', signError);
      return NextResponse.json(
        { error: 'Signature generation failed', details: signError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      checkoutUrl: MYPOS_CONFIG.ipcUrl,
      formData: postData,
      orderId: orderId,
      debug: {
        environment: process.env.MYPOS_SANDBOX === 'true' ? 'sandbox' : 'production',
        parametersCount: Object.keys(postData).length,
        signatureLength: postData.Signature.length
      }
    });

  } catch (error) {
    console.error('=== MyPOS API ERROR ===');
    console.error(error);
    return NextResponse.json(
      { error: 'MyPOS checkout failed', details: error.message },
      { status: 500 }
    );
  }
}