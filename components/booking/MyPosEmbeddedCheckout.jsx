import { useEffect } from "react";

export default function MyPOSEmbeddedCheckout({ checkoutId }) {
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://www.mypos.com/checkout/js/embed.js";
  script.async = true;
  
  script.onload = () => {
    console.log("MyPOS script loaded successfully");
  };
  
  script.onerror = () => {
    console.error("Failed to load MyPOS script");
  };
  
  document.body.appendChild(script);

  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
}, []);

  return (
    <div
      className="mypos-checkout"
      data-checkout-id={checkoutId}
      data-button-text="Pay Now"
    ></div>
  );
}
