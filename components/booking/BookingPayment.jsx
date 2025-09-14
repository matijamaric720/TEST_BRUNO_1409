// BookingPayment.jsx
"use client";

import { Suspense } from "react";
import BookingPaymentInner from "./BookingPaymentInner";

export default function BookingPayment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPaymentInner />
    </Suspense>
  );
}
