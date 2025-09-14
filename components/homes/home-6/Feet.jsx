"use client";
import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Feet() {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    // initialSlide: 1,
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: ".snbn12",
      prevEl: ".snbp12",
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
    <section className="section pt-120 pb-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-7">
            <h2 className="heading-44-medium wow fadeInUp">Our Fleet</h2>
          </div>
          <div className="col-lg-6 col-5 text-end">
            <Link
              className="text-16-medium color-primary wow fadeInUp"
              href="/fleet-list"
            >
              More Fleet
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
            </Link>
          </div>
        </div>
        <div className="box-slide-fleet-2 fleet-style-5 mt-50">
          <div className="box-swiper">
            <Swiper
              {...swiperOptions}
              style={{ maxWidth: "100%", overflow: "hidden" }}
              className="swiper-container swiper-group-3-fleet pb-0"
            >
              {cars.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="cardFleet wow fadeInUp">
                    <div className="cardInfo">
                      <Link href={`/fleet-single/${elm.id}`}>
                        <h3 className="text-20-medium color-text mb-10">
                          {elm.title}
                        </h3>
                      </Link>
                      <p className="text-14 color-text mb-30">
                        {elm.description}
                      </p>
                    </div>
                    <div className="cardImage mb-30">
                      <Link href={`/fleet-single/${elm.id}`}>
                        <Image
                          width={1530}
                          height={711}
                          src={elm.imgSrc}
                          style={{ height: "fit-content" }}
                          alt="Luxride"
                        />
                      </Link>
                    </div>
                    <div className="cardInfoBottom">
                      <div className="passenger">
                        <span className="icon-circle icon-passenger"></span>
                        <span className="text-14">
                          Passengers<span>{elm.passenger}</span>
                        </span>
                      </div>
                      <div className="luggage">
                        <span className="icon-circle icon-luggage"></span>
                        <span className="text-14">
                          Luggage<span>{elm.luggage}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="box-pagination-fleet">
                <div className="swiper-button-prev swiper-button-prev-fleet snbp12">
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
                <div className="swiper-button-next swiper-button-next-fleet snbn12">
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
