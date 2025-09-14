"use client";
import { cars } from "@/data/cars";
import { addLeftPaddingSwiper } from "@/utlis/addSwiperPadding";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Feet() {
  useEffect(() => {
    addLeftPaddingSwiper();
    //add padding to .swiper-padding according to .swiper-title
    window.addEventListener("resize", addLeftPaddingSwiper);
    return () => {
      window.removeEventListener("resize", addLeftPaddingSwiper);
    };
  }, []);
  const settings = {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 1,
    // initialSlide: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn25",
      prevEl: ".snbp25",
    },
    modules: [Navigation, Autoplay],

    autoplay: {
      delay: 10000,
    },

    breakpoints: {
      1399: {
        slidesPerView: 4,
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
    <section className="section pt-90 pb-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-7">
            <h2 className="heading-44-medium title-fleet wow fadeInUp">
              Our Fleet
            </h2>
          </div>
          <div className="col-lg-6 col-5 text-end">
            <Link
              className="text-16-medium color-primary wow fadeInUp"
              href="#"
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
      </div>
      <div className="box-slide-fleet fleet-style-2 mt-4 px-4">
        <div className="box-swiper">
          <Swiper
            style={{ maxWidth: "100vw", overflow: "hidden" }}
            {...settings}
            className="swiper-container swiper-group-4-fleet pb-0"
          >
            {cars.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cardFleet wow fadeInUp carfleet-height">
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
                      <Image
                        width={512}
                        height={512}
                        src={elm.imgSrc}
                        style={{ height: "128px", width: "256px" }}
                        alt="Luxride"
                      />
                  </div>
                  <div className="cardInfoBottom">
                    <div className="passenger">
                      <span className="icon-circle icon-passenger"></span>
                      <span className="text-14">
                        <span>{elm.passenger}</span>
                      </span>
                    </div>
                    <div className="luggage">
                      <span className="icon-circle icon-luggage"></span>
                      <span className="text-14">
                        <span>{elm.luggageS} <br /> {elm.luggageL}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="box-pagination-fleet">
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
