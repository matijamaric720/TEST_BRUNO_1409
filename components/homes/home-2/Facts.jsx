"use client";
import { facts } from "@/data/facts";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Facts() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-30">
            <div className="box-image-showcase wow fadeInUp">
              <Image
                width={1410}
                height={1650}
                src="/assets/imgs/page/homepage2/showcase.png"
                style={{ height: "fit-content" }}
                alt="luxride"
              />
              <div className="box-btn-play-video">
                <a className="btn btn-white" onClick={() => setIsOpen(true)}>
                  <Image
                    width={16}
                    height={16}
                    className="align-middle mr-10"
                    src="/assets/imgs/page/homepage2/play.svg"
                    alt="luxride"
                  />
                  Play Video
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mb-30">
            <div className="box-region-right">
              <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                Showcase some impressive numbers.
              </h2>
              <p className="text-16 color-text mb-30 wow fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="row align-items-center">
                {facts.map((elm, i) => (
                  <div key={i} className="col-sm-4 col-6 mb-30">
                    <div className="box-number-info wow fadeInUp">
                      <span className="text-20-medium text-number">
                        {elm.number}
                      </span>
                      <span className="text-14 text-number-info">
                        {elm.text}{" "}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-secondary wow fadeInUp">
                Learn More
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
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="sVPYIRF9RCQ"
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
