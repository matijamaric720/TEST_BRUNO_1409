"use client";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    id: 1,
    backgroundImage: "/assets/imgs/page/homepage1/banner4.png",
    title: "Discover the World with Our Expert Guides",
  },
  {
    id: 2,
    backgroundImage: "/assets/imgs/page/homepage1/banner4.png",
    title: "Relax in the World's Most Beautiful Locations",
  },
  {
    id: 3,
    backgroundImage: "/assets/imgs/page/homepage1/banner4.png",
    title: "Culinary Tours to Excite Your Palate",
  },
];

export default function Hero() {
  const options = {
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: ".spb22",
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 10000,
    },
  };
  return (
    <section className="section banner-home1 banner-home9">
      <div className="box-swiper">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...options}
          className="swiper-container swiper-banner-2 pb-0"
        >
          {slides.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div
                className="box-cover-image wow fadeInUp"
                style={{ backgroundImage: `url(${elm.backgroundImage})` }}
              ></div>
              <div className="box-banner-info text-center wow fadeInUp">
                <h2 className="heading-52-medium color-white">
                  {elm.title.split(" ").slice(0, 3).join(" ")}
                  <br className="d-none d-lg-block" />
                  {elm.title.split(" ").slice(3).join(" ")}
                </h2>
                <div className="mt-30">
                  <Link className="btn btn-border" href="/fleet-list">
                    View Our Fleet
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
            </SwiperSlide>
          ))}

          <div className="box-pagination-button">
            <div className="swiper-pagination swiper-pagination-banner-2 spb22"></div>
          </div>
        </Swiper>
      </div>
      <div className="box-search-ride box-search-ride-5 wow fadeInUp">
        <div className="search-item search-date">
          <div className="search-icon">
            <span className="item-icon icon-date"> </span>
          </div>
          <div className="search-inputs gray">
            <label className="text-14 color-grey">Date</label>
            <DatePickerComponent />
          </div>
        </div>
        <div className="search-item search-time">
          <div className="search-icon">
            <span className="item-icon icon-time"> </span>
          </div>
          <div className="search-inputs gray">
            <label className="text-14 color-grey">Time</label>
            <TimePickerComponent />
          </div>
        </div>
        <div className="search-item search-from">
          <div className="search-icon">
            <span className="item-icon icon-from"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">From</label>
            <PlacePicker />
          </div>
        </div>
        <div className="search-item search-to">
          <div className="search-icon">
            <span className="item-icon icon-to"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">To</label>
            <PlacePicker />
          </div>
        </div>
        <div className="search-item search-button">
          <button className="btn btn-search" type="submit">
            <Image
              width={20}
              height={20}
              src="/assets/imgs/template/icons/search.svg"
              alt="luxride"
            />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
