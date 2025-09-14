"use client";
import { services4 } from "@/data/services";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Services() {
  const settings = {
    slidesPerView: 1,
    loop: false,
    direction: "vertical",
    speed: 1000,
    mousewheelcontrol: "true",
    watchSlidesProgress: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    modules: [Autoplay, Pagination],
    autoHeight: 1,
    height: 945,
    preventInteractionOnTransition: 1,

    pagination: {
      el: ".sp30",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class='${className}'> ${index + 1} </span>`;
      },
    },
    // autoplay: {
    //   delay: 10000,
    // },
  };
  return (
    <section className="section box-intercity-home8 banner-homepage6">
      <div className="container-fluid">
        <div className="box-slider-customers wow fadeInUp">
          <div className="box-swiper">
            <Swiper
              {...settings}
              className="swiper-container swiper-group-1-number pb-0"
            >
              {services4.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="row serviceVirticalSlider align-items-center">
                    <div className="image col-lg-6">
                      <div className="box-img-intercity">
                        <Image
                          width={945}
                          height={960}
                          src={elm.image}
                          style={{ height: "fit-content" }}
                          alt="luxride"
                        />
                      </div>
                    </div>
                    <div className="content col-lg-6">
                      <div className="box-info-slide-custmer">
                        <h3 className="heading-44-medium color-text mb-30">
                          {elm.title.split(" ").slice(0, 1).join(" ")}{" "}
                          <br className="d-none d-lg-block" />
                          {elm.title.split(" ").slice(1).join(" ")}
                        </h3>
                        <p className="text-16 color-text">{elm.description}</p>
                        <div className="mt-30">
                          <a className="btn btn-primary">
                            More Detail
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-pagination swiper-pagination-number sp30"></div>
        </div>
      </div>
    </section>
  );
}
