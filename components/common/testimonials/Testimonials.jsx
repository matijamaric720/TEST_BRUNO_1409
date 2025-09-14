"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import ModalVideo from "react-modal-video";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1); // realIndex gives the actual index of the current slide
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section pt-130 pb-100 bg-2 box-testimonials">
        <div className="container-sub">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-30">
              <div className="box-swiper">
                <Swiper
                  onSlideChange={handleSlideChange}
                  slidesPerView={1}
                  pagination={{
                    el: ".stp26",
                    clickable: true,
                    // type: "fraction",
                  }}
                  loop
                  modules={[Pagination, Autoplay]}
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                  autoplay={{ delay: 10000 }}
                  className="swiper-container swiper-group-testimonials pb-50"
                >
                  {testimonials.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="cardQuote wow fadeInUp">
                        <div className="box-quote">
                          <div className="icon-quote bg-secondary"></div>
                          <div className="info-quote">
                            <h5 className="color-text text-18-medium">
                              {elm.name}
                            </h5>
                            <p className="color-text text-14">
                              {elm.occupation}
                            </p>
                          </div>
                        </div>
                        <div className="content-quote color-text">
                          {elm.content}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="box-pagination-testimonials mt-40 swiper-pagination-grey">
                    <span className="firstNumber ">0{currentIndex}</span>
                    <span className="lastNumber ">0{testimonials.length}</span>

                    <div className="swiper-pagination swiper-pagination-testimonials stp26"></div>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 mb-30 text-lg-end text-center d-none d-md-block">
              <div className="box-video wow fadeInUp">
                <a
                  className="btn btn-play popup-youtube hover-up"
                  onClick={() => setIsOpen(true)}
                ></a>
                <Image
                  width={370}
                  height={390}
                  src="/assets/imgs/page/about/img1.png"
                  alt="luxride"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="sVPYIRF9RCQ"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
