export default function handler(req, res) {
    const envCheck = {
      myposSandbox: process.env.MYPOS_SANDBOX,
      myposSid: process.env.MYPOS_SID ? 'SET' : 'NOT SET',
      myposWallet: process.env.MYPOS_WALLET_NUMBER ? 'SET' : 'NOT SET',
      myposKeyIndex: process.env.MYPOS_KEY_INDEX,
      myposPrivateKey: process.env.MYPOS_PRIVATE_KEY ? 'SET (length: ' + process.env.MYPOS_PRIVATE_KEY.length + ')' : 'NOT SET',
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      okUrl: process.env.MYPOS_OK_URL,
      cancelUrl: process.env.MYPOS_CANCEL_URL,
      notifyUrl: process.env.MYPOS_NOTIFY_URL
    };
  
    const allSet = Object.values(envCheck).every(val => val && val !== 'NOT SET');
  
    res.status(200).json({
      message: 'API is working!',
      method: req.method,
      timestamp: new Date().toISOString(),
      environment: envCheck,
      configurationStatus: allSet ? '✅ ALL CONFIGURED' : '❌ MISSING CONFIGURATION',
      readyForTesting: allSet,
      nextSteps: allSet 
        ? ['Test MyPOS checkout route', 'Fill passenger form', 'Submit payment']
        : ['Check .env.local file', 'Restart development server', 'Verify all environment variables']
    });
  }