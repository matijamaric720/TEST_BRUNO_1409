"use client";
import { testimonials2 } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const settings = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn4",
      prevEl: ".snbp4",
    },
    pagination: {
      el: ".stp2",
      clickable: true,
      type: "fraction",
    },
    modules: [Navigation, Autoplay, Pagination],
    autoplay: {
      delay: 10000,
    },
  };

  return (
    <section className="section pt-120 block-padding-100">
      <div className="box-fleet-padding bg-2 bg-testimonial">
        <div className="container-sub">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                Hear what our amazing customers say
              </h2>
              <p className="text-16 color-text mb-30 wow fadeInUp">
                Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed dia
                morem ipsum dolor situamet consetetur loutrytru.
              </p>
              <Link className="btn btn-secondary wow fadeInUp" href="/login">
                Get Started
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
            <div className="col-lg-6 mb-30">
              <div className="box-region-right wow fadeInUp">
                <div className="box-swiper">
                  <Swiper
                    {...settings}
                    className="swiper-container swiper-group-testimonials-2 pb-50"
                  >
                    {testimonials2.slice(0, 2).map((elm, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <div className="cardTestimonial">
                          <div className="cardAuthor mb-30">
                            <div className="box-author">
                              <Image
                                width={210}
                                height={210}
                                src={elm.img}
                                alt="luxride"
                              />
                              <div className="author-info">
                                <div className="author-name text-18-medium color-text">
                                  {elm.name}
                                </div>
                                <p className="text-14 color-text desc-author">
                                  {elm.role}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="info-testimonial">
                            <p className="color-text text-18-medium-2">
                              {elm.content}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="box-pagination-button-testimonials-2">
                      <div className="swiper-button-prev swiper-button-prev-testimonials-2 snbp4"></div>
                      <div className="swiper-button-next swiper-button-next-testimonials-2 snbn4"></div>
                      <div className="swiper-pagination swiper-pagination-testimonials-2 stp2"></div>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
