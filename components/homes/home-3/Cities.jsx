"use client";
import { citiesData } from "@/data/cities";
import { addLeftPaddingSwiper } from "@/utlis/addSwiperPadding";
import Image from "next/image";
import { useEffect } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Cities() {
  useEffect(() => {
    addLeftPaddingSwiper();

    window.addEventListener("resize", addLeftPaddingSwiper);
    return () => {
      window.removeEventListener("resize", addLeftPaddingSwiper);
    };
  }, []);
  const settings = {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 1,
    // initialSlide: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn5",
      prevEl: ".snbp5",
    },
    modules: [Navigation, Autoplay],

    autoplay: {
      delay: 10000,
    },

    breakpoints: {
      1399: {
        slidesPerView: 5,
      },
      1100: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 2,
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
    <section className="section pt-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7 col-7">
            <h2 className="heading-44-medium title-fleet wow fadeInUp">
              Top Cities
            </h2>
          </div>
          <div className="col-lg-6 col-sm-5 col-5 text-end">
            <a
              className="text-16-medium color-primary d-flex align-items-center justify-content-end wow fadeInUp"
              href="#"
            >
              More Cities
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
      </div>
      <div className="box-slide-fleet  mt-50">
        <div className="box-swiper">
          <Swiper
            {...settings}
            className="swiper-container swiper-group-5-cities pb-0"
          >
            {citiesData.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cardCities wow fadeInUp">
                  <div className="cardImage">
                    <a href="#">
                      <Image
                        width={810}
                        height={810}
                        src={elm.imgSrc}
                        style={{ height: "fit-content" }}
                        alt="Luxride"
                      />
                    </a>
                  </div>
                  <div className="cardInfo">
                    <a href="#">
                      <h3 className="cardTitle color-text">{elm.routeCount}</h3>
                    </a>
                    <p className="cardDesc color-text">{elm.cityName}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="box-pagination-fleet">
              <div className="swiper-button-prev swiper-button-prev-fleet snbp5">
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
              <div className="swiper-button-next swiper-button-next-fleet snbn5">
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
    </section>
  );
}
