"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials3 } from "@/data/testimonials";
import { facts2 } from "@/data/facts";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1); // realIndex gives the actual index of the current slide
  };
  const numStars = 5;
  return (
    <section className="section pt-130 pb-130 bg-4 box-testimonials">
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="box-customers-say">
              <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                What our customers are saying us?
              </h2>
              <p className="text-16 color-text mb-30 wow fadeInUp">
                Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed dia
                morem ipsum dolor situamet consetetur loutrytru.
              </p>
              <div className="row">
                {facts2.map((elm, i) => (
                  <div key={i} className="col-lg-6 mb-30 wow fadeInUp">
                    <h4 className="heading-24-bold color-text">{elm.value}</h4>
                    <p className="text-14-medium color-text">{elm.label}</p>
                    {elm.star && (
                      <div className="rates">
                        {Array.from({ length: elm.star }, (_, index) => (
                          <Image
                            width={10}
                            height={10}
                            key={index}
                            src="/assets/imgs/page/homepage3/star.png"
                            alt="luxride"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="box-swiper">
              <Swiper
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                pagination={{
                  el: ".stp3",
                  clickable: true,
                  // type: "fraction",
                }}
                loop
                modules={[Pagination, Autoplay]}
                style={{ maxWidth: "100%", overflow: "hidden" }}
                autoplay={{ delay: 10000 }}
                className="swiper-container swiper-group-testimonials pb-50"
              >
                {testimonials3.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <div className="cardQuote cardTestimonialsStyle2">
                      <div className="box-quote">
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
                      <div className="content-quote color-text">
                        {elm.content}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="box-pagination-testimonials box-pagination-testimonials-2 mt-30">
                  <span className="firstNumber">0{currentIndex}</span>
                  <span className="lastNumber">0{testimonials3.length}</span>
                  <div className="swiper-pagination swiper-pagination-testimonials stp3"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
