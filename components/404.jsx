import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <>
      <section className="section mt-120 mb-100">
        <div className="container-sub">
          <div className="text-center">
            <Image
              width="770"
              height="538"
              className="wow fadeInUp"
              src="/assets/imgs/page/404/404.svg"
              alt="luxride"
            />
            <h2 className="heading-44-medium color-text mt-50 mb-20 wow fadeInUp">
              Oops! It looks like you're lost.
            </h2>
            <p className="color-text text-16 mb-25 wow fadeInUp">
              The page you're looking for isn't available. Try to search again
              or use the go to.
            </p>
            <a className="btn btn-primary pl-50 pr-50 wow fadeInUp" href="#">
              Go Back to Homepage
              <svg
                className="icon-16 ml-5"
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
      </section>
    </>
  );
}
