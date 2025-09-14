"use client";
import DatePickerComponent from "@/components/common/DatePicker";
import DatePicker from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";
import TimePickerComponent from "@/components/common/TimePicker";
import TimePicker from "@/components/common/TimePicker";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const handleClick = () => {
    window.location.href = `/booking-vehicle?input=${encodeURIComponent((selectedPlace.name))}`;
  };
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <>
      <section className="section banner-home1 banner-home10">
        <div
          className="box-cover-image boxBgImage"
          style={{
            backgroundImage: "url(/assets/imgs/page/homepage10/banner.png)",
          }}
        >
          <div className="box-banner-info d-flex justify-content-between align-items-center">
            <div className="banner-info-left">
              <h2 className="heading-52-medium color-white wow fadeInUp mb-2">
                Welcome to BONE Travel <br/>
                transportation services
              </h2>
              <p className="text-20 color-white wow fadeInUp mb-3">
                Send us your request and book your
                <br className="d-none d-lg-block" />
                personal transportation service to, from or within Zagreb.
              </p>
              <p className="color-white wow fadeInUp">For services outside these areas, we quote on request. Please contact us.</p>
            </div>

          </div>
        </div>
        <div className="box-search-ride box-search-ride-style-6 wow fadeInUp">
          <div className="box-search-tabs">
            <div className="head-tabs">
              <ul className="nav nav-tabs nav-tabs-search" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-distance"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-distance"
                    aria-selected="true"
                  >
                    Transfer
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-hourly"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-hourly"
                    aria-selected="false"
                  >
                    Hourly
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="tab-distance"
                role="tabpanel"
                aria-labelledby="tab-distance"
              >
                <div className="box-form-search">
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePicker />
                    </div>
                  </div>
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePicker />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      {isSwapped ? (
                        <div className="p-6">
                          <PlaceFinderBlank onSelect={setSelectedPlace} />
                        </div>
                      ) : (
                        <PlacePicker />
                      )}
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      {isSwapped ? (
                        <PlacePicker />
                      ) : (
                        <div className="p-6">
                          <PlaceFinderBlank onSelect={setSelectedPlace} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="search-item search-button mb-0">
                    <button
                      type="button"
                      onClick={() => setIsSwapped((prev) => !prev)}
                      className="btn btn-secondary w-full"
                    >
                      Swap
                    </button>
                  </div>

                  <div className="search-item search-button mb-0">
                    <button className="btn btn-search" type="submit" onClick={handleClick}>
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
              </div>
              <div
                className="tab-pane fade"
                id="tab-hourly"
                role="tabpanel"
                aria-labelledby="tab-hourly"
              >
                <div className="box-form-search">
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent />
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
                  <div className="search-item search-button mb-0">
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
              </div>
              <div
                className="tab-pane fade"
                id="tab-rate"
                role="tabpanel"
                aria-labelledby="tab-rate"
              >
                <div className="box-form-search">
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs text-center">
                      <label className="text-14 color-grey">From</label>
                      <PlacePicker />
                    </div>
                  </div>

                  <div className="search-item search-button mb-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
