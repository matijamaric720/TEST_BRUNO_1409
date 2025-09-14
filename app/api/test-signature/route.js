// app/api/test-signature/route.js  
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  try {
    console.log('=== COMPREHENSIVE MYPOS SIGNATURE TEST ===');
    
    const privateKey = process.env.MYPOS_PRIVATE_KEY;
    if (!privateKey) {
      return NextResponse.json({
        error: 'Private key not configured in environment',
        status: 'FAIL'
      });
    }

    // Test data matching MyPOS structure
    const testPostData = {
      IPCmethod: 'IPCPurchase',
      IPCVersion: '1.4',
      IPCLanguage: 'EN',
      SID: '000000000000010',
      walletnumber: '61938166610',
      Amount: '25.50',
      Currency: 'EUR',
      OrderID: 'TEST_12345',
      URL_OK: 'http://localhost:3000/payment/success',
      URL_Cancel: 'http://localhost:3000/payment/cancel',
      URL_Notify: 'http://localhost:3000/api/mypos/notify',
      CardTokenRequest: '0',
      KeyIndex: '1',
      PaymentParametersRequired: '1',
      PaymentMethod: '1',
      customeremail: 'test@example.com',
      customerfirstnames: 'John',
      customerfamilyname: 'Doe',
      customerphone: '+359888123456',
      customercountry: 'BGR',
      Note: 'Test payment',
      Source: '',
      CartItems: '1',
      Article_1: 'Test Product',
      Quantity_1: '1',
      Price_1: '25.50',
      Currency_1: 'EUR',
      Amount_1: '25.50'
    };

    console.log('Testing signature with', Object.keys(testPostData).length, 'parameters');

    // EXACT MyPOS signature process from documentation
    // Step 1: Remove Signature field (like PHP unset)
    const { Signature, ...dataWithoutSignature } = testPostData;
    
    // Step 2: Concatenate all values with '-' (like PHP implode('-', $postData))
    const concatenatedValues = Object.values(dataWithoutSignature).join('-');
    console.log('Step 2 - Concatenated values:', concatenatedValues);
    
    // Step 3: Base64 encode (like PHP base64_encode($concData))
    const base64EncodedData = Buffer.from(concatenatedValues, 'utf8').toString('base64');
    console.log('Step 3 - Base64 data:', base64EncodedData);
    
    // Step 4: Sign with SHA256 (like PHP openssl_sign with OPENSSL_ALGO_SHA256)
    const signer = crypto.createSign('SHA256');
    signer.update(base64EncodedData, 'utf8');
    signer.end();
    const binarySignature = signer.sign(privateKey);
    
    // Step 5: Base64 encode the signature (like PHP base64_encode($signature))
    const finalSignature = binarySignature.toString('base64');
    console.log('Step 5 - Final signature:', finalSignature);

    // Self-verification test
    let verificationResult = 'UNKNOWN';
    try {
      // Extract public key from private key for verification
      const publicKey = crypto.createPublicKey(privateKey);
      
      const verifier = crypto.createVerify('SHA256');
      verifier.update(base64EncodedData, 'utf8');
      verifier.end();
      
      const isValid = verifier.verify(publicKey, binarySignature);
      verificationResult = isValid ? '✅ VALID' : '❌ INVALID';
    } catch (verifyError) {
      verificationResult = '❓ VERIFICATION ERROR: ' + verifyError.message;
    }

    return NextResponse.json({
      status: 'SUCCESS',
      testResults: {
        parametersCount: Object.keys(dataWithoutSignature).length,
        step1_removeSignature: 'Completed',
        step2_concatenate: {
          preview: concatenatedValues.substring(0, 100) + '...',
          length: concatenatedValues.length
        },
        step3_base64Encode: {
          preview: base64EncodedData.substring(0, 80) + '...',
          length: base64EncodedData.length
        },
        step4_sign: 'SHA256 algorithm used',
        step5_base64Signature: {
          preview: finalSignature.substring(0, 50) + '...',
          length: finalSignature.length
        },
        verification: verificationResult
      },
      environment: {
        privateKeyLength: privateKey.length,
        nodeVersion: process.version,
        cryptoAvailable: true
      },
      readyForMyPOS: verificationResult.includes('✅'),
      fullSignature: finalSignature
    });

  } catch (error) {
    console.error('Test failed:', error);
    return NextResponse.json({
      status: 'FAIL',
      error: error.message,
      stack: error.stack
    });
  }
}