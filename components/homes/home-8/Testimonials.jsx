"use client";
import { testimonials3 } from "@/data/testimonials";
import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="section box-testimonials-home8">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 mb-30">
            <div className="box-customers-images">
              <Image
                width={900}
                height={930}
                style={{ height: "fit-content" }}
                src="/assets/imgs/page/homepage8/img1.png"
                alt="luxride"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 mb-30">
            <div className="box-swiper">
              <Swiper
                slidesPerView={1}
                slidesPerGroupAuto
                loop
                // onSwiper={(swiper) => (swiperRef.current = swiper)}
                style={{ maxWidth: "100vw", overflow: "hidden" }}
                // loop: true,

                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".snbn21",
                  prevEl: ".snbp21",
                }}
                pagination={{
                  el: ".spb21",
                  clickable: true,
                  type: "fraction",
                }}
                autoplay={{
                  delay: 10000,
                }}
                className="swiper-container swiper-group-testimonials-fraction pb-0"
              >
                {testimonials3.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                      <div className="comment-author mb-30">
                        <p className="text-18-medium color-text">{elm.name}</p>
                        <span className="text-14 color-text">{elm.role}</span>
                      </div>
                      <div className="content-quote color-text">
                        {elm.content}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="box-pagination-fleet">
                  <div className="swiper-button-prev swiper-button-prev-fleet swiper-button-prev-small swiper-button-prev-testimonials-fraction snbp21">
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
                  <div className="swiper-button-next swiper-button-next-fleet swiper-button-next-small swiper-button-next-testimonials-fraction snbn21">
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
                  <div className="swiper-pagination swiper-pagination-testimonials-fraction spb21"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
