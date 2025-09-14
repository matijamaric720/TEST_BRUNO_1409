"use client";
import { testimonials3 } from "@/data/testimonials";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1); // realIndex gives the actual index of the current slide
  };
  return (
    <div className="section pt-180 pb-130 box-testimonials box-testimonials-home5 mt-120">
      <div className="container-sub">
        <div className="box-testimonials-770">
          <div className="box-swiper">
            <Swiper
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              pagination={{
                el: ".stp4",
                clickable: true,
                // type: "bullets",
              }}
              loop
              modules={[Navigation, Pagination, Autoplay]}
              //   style={{ maxWidth: "100%", overflow: "hidden" }}
              autoplay={{ delay: 10000 }}
              className="swiper-container swiper-group-testimonials pb-50 "
            >
              {testimonials3.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                    <div className="content-quote color-text heading-32-medium">
                      {elm.content}
                    </div>
                    <div className="box-quote">
                      <div className="box-author">
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
                  </div>
                </SwiperSlide>
              ))}

              <div className="box-pagination-testimonials box-pagination-testimonials-2 mt-30">
                <span className="firstNumber">0{currentIndex}</span>
                <span className="lastNumber">0{testimonials3.length}</span>
                <div className="swiper-pagination  swiper-pagination-testimonials stp4"></div>
              </div>
            </Swiper>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
