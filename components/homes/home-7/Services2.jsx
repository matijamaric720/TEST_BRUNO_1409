"use client";

import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services2() {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    // initialSlide: 1,
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: ".snbn16",
      prevEl: ".snbp16",
    },

    autoplay: {
      delay: 10000,
    },
    breakpoints: {
      1399: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      670: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      350: {
        slidesPerView: 1,
      },
      150: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section
      style={{ maxWidth: "100vw", overflow: "hidden" }}
      className="section bg-our-service-home-7"
    >
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7 col-7">
            <h2 className="color-white heading-44-medium wow fadeInUp">
              Our Services
            </h2>
          </div>
          <div className="col-lg-6 col-sm-5 col-5 text-end">
            <Link
              className="text-16-medium color-white d-flex align-items-center justify-content-end wow fadeInUp"
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
        <div className="box-slide-fleet-2 mt-50">
          <div className="box-swiper">
            <Swiper
              style={{ maxWidth: "100vw", overflow: "hidden" }}
              {...swiperOptions}
              className="swiper-container swiper-group-3-fleet pb-45"
            >
              {services.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="cardService cardServiceStyle4 wow fadeInUp">
                    <Link href={`/service-single/${elm.id}`}>
                      <div className="cardImage">
                        <Image
                          width={370}
                          height={400}
                          src={elm.image}
                          style={{ height: "fit-content" }}
                          alt="Luxride"
                        />
                      </div>
                      <div className="cardInfo">
                        <h3 className="cardTitle text-20-medium color-white mb-10">
                          {elm.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="box-pagination-fleet">
              <div className="swiper-button-prev swiper-button-prev-fleet snbp16">
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
              <div className="swiper-button-next swiper-button-next-fleet snbn16">
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
      </div>
    </section>
  );
}
