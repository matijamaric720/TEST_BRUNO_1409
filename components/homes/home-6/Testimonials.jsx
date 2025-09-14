"use client";
import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1); // realIndex gives the actual index of the current slide
  };
  const settings = {};
  const slideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <section className="section pt-120 box-testimonials">
      <div className="container-sub">
        <div className="text-center">
          <h3 className="heading-44-medium color-text wow fadeInUp">
            Hear what our amazing <br className="d-none d-lg-block" />
            customers say
          </h3>
        </div>
        <div className="row mt-50">
          <div className="col-lg-5 col-md-6 mb-30">
            <div className="box-customers-images wow fadeInUp">
              {testimonials4.map((elm, i) => (
                <div
                  key={i}
                  onClick={() => slideTo(i)}
                  className={`image-customer ${
                    currentIndex == i + 1 ? "active" : ""
                  }`}
                >
                  <Image width={270} height={271} src={elm.img} alt="luxride" />
                  {currentIndex == i + 1 && (
                    <div className="customer-quote">
                      <Image
                        width={40}
                        height={41}
                        src="/assets/imgs/page/homepage6/customer-quote.png"
                        alt="luxride"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 col-md-6 mb-30">
            <div className="box-swiper">
              <Swiper
                slidesPerView={1}
                slidesPerGroupAuto
                loop
                ref={swiperRef}
                // onSwiper={(swiper) => (swiperRef.current = swiper)}
                style={{ maxWidth: "100vw", overflow: "hidden" }}
                // loop: true,
                onSlideChange={handleSlideChange}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".snbn13",
                  prevEl: ".snbp13",
                }}
                pagination={{
                  el: ".swiper-pagination-testimonials-fraction",
                  clickable: true,
                  type: "fraction",
                }}
                autoplay={{
                  delay: 10000,
                }}
                className="swiper-container swiper-group-testimonials-fraction pb-50"
              >
                {testimonials4.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <div className="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                      <div className="content-quote color-text">
                        {elm.quote1}
                        <br />
                        <br />
                        {elm.quote2}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="box-pagination-fleet">
                  <div className="swiper-button-prev swiper-button-prev-fleet swiper-button-prev-small swiper-button-prev-testimonials-fraction snbp13">
                    <svg
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
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      ></path>
                    </svg>
                  </div>
                  <div className="swiper-button-next swiper-button-next-fleet swiper-button-next-small swiper-button-next-testimonials-fraction snbn13">
                    <svg
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </div>
                  <div className="swiper-pagination swiper-pagination-testimonials-fraction"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
