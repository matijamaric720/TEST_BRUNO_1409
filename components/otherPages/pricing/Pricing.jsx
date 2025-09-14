"use client";
import { plansData } from "@/data/pricing";
import Image from "next/image";
import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="section mt-120 mb-100">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">
            Price Table With Featured
          </h2>
        </div>
        <div className="mt-30 text-center box-bill-switch wow fadeInUp">
          <div className="d-inline-block mr-30 mb-30">
            <span className="text-14 color-text text-billed-month">
              Bill Monthly
            </span>
            <label className="switch ml-20 mr-20">
              <input
                id="cb_billed_type"
                type="checkbox"
                name="billed_type"
                onChange={() => setIsYearly((pre) => !pre)}
              />
              <span className="slider round"></span>{" "}
            </label>
            <span className="text-14 color-text text-billed-year">
              Bill Annually
            </span>
          </div>
          <span className="btn btn-rounded mb-30">Save 20%</span>
        </div>
        <div className="row mt-20 align-items-end pricing-style-2">
          {plansData.map((elm, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
              <div className="card-plan hover-up wow fadeInUp">
                <div className="card-plan-top">
                  <div className="card-top-left-info">
                    <h5 className="color-text text-20-medium title-plan">
                      {elm.title}
                    </h5>
                    <div
                      className={`for-month ${
                        !isYearly ? "display-month" : ""
                      }`}
                    >
                      <h3 className="heading-36-medium">{`${
                        elm.monthlyPrice ? elm.monthlyPrice.toFixed(2) : "Free"
                      }`}</h3>
                      <p className="text-14 color-text desc-plan">per month</p>
                    </div>
                    <div
                      className={`for-year ${isYearly ? "display-year" : ""}`}
                    >
                      <h3 className="heading-36-medium">{`${
                        elm.monthlyPrice
                          ? (elm.monthlyPrice * 12 * 0.8).toFixed(2)
                          : "Free"
                      }`}</h3>
                      <p className="text-14 color-text desc-plan">per year</p>
                    </div>
                  </div>
                  <div className="card-top-right-image">
                    <Image
                      width={70}
                      height={70}
                      src={elm.imageSrc}
                      alt="luxride"
                    />
                  </div>
                </div>
                <div className="item-desc-plan">
                  <p className="color-text text-14">{elm.description}</p>
                </div>
                <div className="mt-30 mb-30">
                  <ul className="list-ticks-plan">
                    {elm.features.map((elm2, i2) => (
                      <li key={i2}>
                        <svg
                          className="icon-16"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          ></path>
                        </svg>
                        {elm2}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-20">
                  <a className="btn btn-border-black" href="#">
                    Join
                    <svg
                      className="icon-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
