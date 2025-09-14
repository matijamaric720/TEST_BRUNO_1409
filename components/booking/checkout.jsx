
const [checkoutId, setCheckoutId] = useState(null);

useEffect(() => {
  async function initCheckout() {
    const res = await fetch("/api/mypos-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1000, currency: "EUR" }),
    });
    const data = await res.json();
    setCheckoutId(data.checkoutId);
  }

  initCheckout();
}, []);

{checkoutId && <MyPOSEmbeddedCheckout checkoutId={checkoutId} />}
