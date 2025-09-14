"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { process } from "@/data/process";
import Image from "next/image";
function PrevArrow() {
  return (
    <button type="button" className="slick-prev">
      <svg
        className="w-6 h-6 icon-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
    </button>
  );
}

function NextArrow() {
  return (
    <button type="button" className="slick-next">
      <svg
        className="w-6 h-6 icon-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
}

export default function Process() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: 0,
    fade: false,
    draggable: false,

    // asNavFor: ".slider-nav-thumbnails"
  };
  const options2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderRef1.current,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    infinite: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section className="section pt-120 pb-20 bg-primary bg-how-it-works">
      <div className="container-sub">
        <h2 className="heading-44-medium color-white mb-60 wow fadeInUp">
          How It Works
        </h2>
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="box-main-slider">
              <div className="detail-gallery wow fadeInUp">
                <Slider
                  asNavFor={nav2}
                  ref={(slider) => (sliderRef1 = slider)}
                  {...options}
                  className="main-image-slider"
                >
                  {process.map((elm, i) => (
                    <figure key={i}>
                      <Image
                        width={1041}
                        height={689}
                        style={{ width: "fit-content", height: "fit-content" }}
                        src={elm.img}
                        alt="luxride"
                      />
                    </figure>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first justify-content-between position-z3 wow fadeInUp">
            <Slider
              {...options2}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              className="slider-nav-thumbnails list-how"
            >
              {process.map((elm, i) => (
                <li key={i}>
                  <span className="line-white"></span>
                  <h4 className="text-20-medium mb-20">{elm.title}</h4>
                  <p className="text-16">{elm.description}</p>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
