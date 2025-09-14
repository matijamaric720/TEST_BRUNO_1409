"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { proces4 } from "@/data/process";
import ModalVideo from "react-modal-video";
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
export default function Proces2() {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <section className="section pt-120 pb-90 bg-2 mt-90">
        <div className="container-sub">
          <div className="text-center">
            <h2 className="heading-44-medium wow fadeInUp">How It Works</h2>
          </div>
          <div className="row mt-60 align-items-center">
            <div className="col-lg-5 mb-30">
              <Slider
                {...options2}
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                className="slider-nav-thumbnails list-how-2 wow fadeInUp"
              >
                {proces4.map((elm, i) => (
                  <li key={i}>
                    <span className="line-dashed"></span>
                    <span className="number-circle">{i + 1}</span>
                    <h4 className="text-20-medium mb-20">{elm.title}</h4>
                    <p className="text-16">{elm.description}</p>
                  </li>
                ))}
              </Slider>
            </div>
            <div className="col-lg-7 mb-30">
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                {...options}
                className="main-image-slider wow fadeInUp"
              >
                {" "}
                {proces4.map((elm, i) => (
                  <div key={i} className="image-slide">
                    <div className="box-image-how">
                      <Image
                        width={1710}
                        height={1800}
                        src={elm.img}
                        style={{ height: "fit-content" }}
                        alt="Luxride"
                      />
                      <div className="box-btn-play">
                        <a
                          className="btn btn-white popup-youtube"
                          onClick={() => setIsOpen(true)}
                        >
                          <Image
                            width={16}
                            height={16}
                            className="align-middle mr-10"
                            src="/assets/imgs/page/homepage2/play.svg"
                            alt="luxride"
                          />
                          See How It Works
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
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
