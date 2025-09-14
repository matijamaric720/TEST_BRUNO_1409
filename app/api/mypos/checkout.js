import { useEffect, useState } from 'react';
// Import the MyPOSEmbeddedCheckout component or your own wrapper
import MyPOSEmbeddedCheckout from '@/components/MyPOSEmbeddedCheckout';

export default function CheckoutPage() {
  const [checkoutId, setCheckoutId] = useState(null);

  useEffect(() => {
    async function initCheckout() {
      const res = await fetch('/api/mypos-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1, currency: 'EUR' }),
      });

const text = await res.text();
console.log('Raw response:', text);

try {
  const data = JSON.parse(text);
  // use data here
} catch (e) {
  console.error('JSON parse error:', e);
}
      if (data.checkoutId) {
        setCheckoutId(data.checkoutId);
      } else {
        console.error('Failed to get checkoutId', data.error);
      }
    }

    initCheckout();
  }, []);

  return (
    <div>
      {checkoutId ? (
        <MyPOSEmbeddedCheckout checkoutId={checkoutId} />
      ) : (
        <p>Loading checkout...</p>
      )}
    </div>
  );
}
