// app/payment/success/page.js
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // MyPOS will redirect here with payment details in search params
    console.log('Success page search params:', Object.fromEntries(searchParams.entries()));

    const orderID = searchParams.get('OrderID');
    if (orderID) {
      setPaymentDetails({
        orderId: orderID,
        amount: searchParams.get('Amount'),
        currency: searchParams.get('Currency'),
        status: searchParams.get('TxnStatus'),
        transactionId: searchParams.get('TxnId'),
        cardType: searchParams.get('CardType'),
        cardMasked: searchParams.get('CardMasked'),
        customerEmail: searchParams.get('CustomerEmail')
      });
    }
  }, [searchParams]);

  const handleContinue = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. Your booking has been confirmed and you will receive a confirmation email shortly.
          </p>

          {/* Payment Details */}
          {paymentDetails && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Order ID:</span>
                  <p className="font-medium">{paymentDetails.orderId}</p>
                </div>
                <div>
                  <span className="text-gray-500">Amount:</span>
                  <p className="font-medium">{paymentDetails.amount} {paymentDetails.currency}</p>
                </div>
                {paymentDetails.transactionId && (
                  <div>
                    <span className="text-gray-500">Transaction ID:</span>
                    <p className="font-medium">{paymentDetails.transactionId}</p>
                  </div>
                )}
                {paymentDetails.cardType && (
                  <div>
                    <span className="text-gray-500">Payment Method:</span>
                    <p className="font-medium">
                      {paymentDetails.cardType} 
                      {paymentDetails.cardMasked && ` ending in ${paymentDetails.cardMasked.slice(-4)}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContinue}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}