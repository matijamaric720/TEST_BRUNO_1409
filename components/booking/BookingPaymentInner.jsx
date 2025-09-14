// BookingPaymentInner.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SideBar from "./SideBar";
import Link from "next/link";

export default function BookingPaymentInner() {
  const checkoutRef = useRef(null);
  const [checkoutId, setCheckoutId] = useState(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  useEffect(() => {
    const initCheckout = async () => {
      try {
        const res = await fetch("/api/mypos-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 1000, currency: "EUR" }),
        });

        const data = await res.json();

        if (data.checkoutId) {
          setCheckoutId(data.checkoutId);
        } else {
          console.error("Failed to fetch checkoutId");
        }
      } catch (error) {
        console.error("Error initializing checkout:", error);
      }
    };

    initCheckout();
  }, []);

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30">Invoice details</h3>

          {/* Form */}
          <div className="form-contact form-comment">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullname">Name</label>
                    <input className="form-control" id="fullname" type="text" value={firstName || ""} disabled />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastname">Last Name</label>
                    <input className="form-control" id="lastname" type="text" value={lastName || ""} disabled />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-30">
            <label className="mb-10" htmlFor="agree-cb">
              <input className="cb-agree" id="agree-cb" type="checkbox" />
              I accept the Terms & Conditions - Booking Conditions and Privacy Policy. *
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-30 mb-120">
            <Link className="btn btn-primary btn-primary-big w-100" href="/booking-receved">
              Proceed to Payment
            </Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
