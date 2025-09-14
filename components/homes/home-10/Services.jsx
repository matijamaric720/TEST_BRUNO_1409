"use client";
import { services5 } from "@/data/services";
import { addLeftPaddingSwiper } from "@/utlis/addSwiperPadding";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  useEffect(() => {
    addLeftPaddingSwiper();
    //add padding to .swiper-padding according to .swiper-title
    window.addEventListener("resize", addLeftPaddingSwiper);
    return () => {
      window.removeEventListener("resize", addLeftPaddingSwiper);
    };
  }, []);
  const settings = {
    slidesPerView: "auto",
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: ".snbn26",
      prevEl: ".snbp26",
    },
    modules: [Autoplay, Navigation],

    autoplay: {
      delay: 1000000,
    },
  };
  return (
    <section className="section bg-our-service-home-10">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7 col-7">
            <h2 className="color-text heading-44-medium title-fleet wow fadeInUp">
              Our Services
            </h2>
          </div>
          <div className="col-lg-6 col-sm-5 col-5 text-end">
            <Link
              className="text-16-medium color-text d-flex align-items-center justify-content-end wow fadeInUp"
              href="/service-grid"
            >
              More Services
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
            </Link>
          </div>
        </div>
      </div>
      <div className="box-slide-fleet">
        <div className="box-swiper">
          <Swiper
            style={{ maxWidth: "100vw", overflow: "hidden" }}
            {...settings}
            className="swiper-container swiper-group-auto swiper-services-auto"
          >
            {services5.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cardService cardServiceStyle5 wow fadeInUp">
                  <div className="cardImage img-width">
                    <Link href={`/service-single/${elm.id}`}>
                      <Image
                        width={256}
                        height={256}
                        src={elm.image}
                        alt="Luxride"
                        
                      />
                    </Link>
                  </div>
                  <div className="cardInfo">
                    <h3 className="cardTitle heading-44-medium color-text mb-30">
                      {elm.title}
                    </h3>
                    <p className="text-16 color-text">{elm.description}</p>
                    <div className="mt-30">
                      <Link
                        className="btn btn-secondary"
                        href={`/service-single/${elm.id}`}
                      >
                        More Details
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
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="box-pagination-fleet">
            <div className="swiper-button-prev swiper-button-prev-fleet swiper-button-prev-group-auto snbp26">
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
            <div className="swiper-button-next swiper-button-next-fleet swiper-button-next-group-auto snbn26">
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
          </div>
        </div>
      </div>
    </section>
  );
}
