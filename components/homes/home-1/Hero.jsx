"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const banners = [
  {
    id: 1,
    url: "/assets/imgs/page/homepage1/banner.png",
    title: "Embark on an Unforgettable Journey",
    text: "Discover the World with Our Expert Guides",
  },
  {
    id: 2,
    url: "/assets/imgs/page/homepage1/banner2.png",
    title: "Adventure Awaits",
    text: "Find Your Perfect Escape",
  },
  {
    id: 3,
    url: "/assets/imgs/page/homepage1/banner3.png",
    title: "Luxury Redefined",
    text: "Travel in Style and Comfort",
  },
  {
    id: 4,
    url: "/assets/imgs/page/homepage1/banner4.png",
    title: "Serenity at Its Best",
    text: "Relax in the World's Most Beautiful Locations",
  },
  {
    id: 5,
    url: "/assets/imgs/page/homepage1/banner5.png",
    title: "Taste the Adventure",
    text: "Culinary Tours to Excite Your Palate",
  },
];

export default function Hero() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleBooking = () => {
    if (!origin || !destination || !date || !time) {
      alert("Please complete all fields before searching.");
      return;
    }

    const params = new URLSearchParams({
      originLat: origin.lat.toString(),
      originLng: origin.lng.toString(),
      destinationLat: destination.lat.toString(),
      destinationLng: destination.lng.toString(),
      input: destination.label, // sends name for default display
      date,
      time,
    });

    router.push(`/booking-vehicles?${params.toString()}`);
  };

  const settings = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn2",
      prevEl: ".snbp2",
    },
    modules: [Navigation, Autoplay, Pagination],
    pagination: {
      el: ".sph1",
      clickable: true,
      type: "fraction",
    },
    autoplay: {
      delay: 10000,
    },
  };

  return (
    <section className="section banner-home1">
      <div className="box-swiper">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...settings}
          className="swiper-container swiper-banner-1 pb-0"
        >
          {banners.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div
                className="box-cover-image boxBgImage"
                style={{
                  backgroundImage: `url(${elm.url})`,
                }}
              ></div>
              <div className="box-banner-info">
                <p className="text-16 color-white wow fadeInUp">{elm.title}</p>
                <h2 className="heading-52-medium color-white wow fadeInUp">
                  {elm.text.split(" ").slice(0, 2).join(" ")}{" "}
                  <br className="d-none d-lg-block" />
                  {elm.text.split(" ").slice(2).join(" ")}
                </h2>
              </div>
            </SwiperSlide>
          ))}

          <div className="box-pagination-button hero1nagigation">
            <div className="swiper-button-prev swiper-button-prev-banner snbp2"></div>
            <div className="swiper-button-next swiper-button-next-banner snbn2"></div>
            <div className="swiper-pagination swiper-pagination-banner sph1"></div>
          </div>
        </Swiper>
      </div>

      <div className="box-search-ride wow fadeInUp">
        <div className="search-item search-date">
          <div className="search-icon">
            <span className="item-icon icon-date"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">Date</label>
            <DatePickerComponent onSelect={setDate} />
          </div>
        </div>

        <div className="search-item search-time">
          <div className="search-icon">
            <span className="item-icon icon-time"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">Time</label>
            <TimePickerComponent onSelect={setTime} />
          </div>
        </div>

        <div className="search-item search-from">
          <div className="search-icon">
            <span className="item-icon icon-from"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">From</label>
            <PlacePicker onSelect={setOrigin} />
          </div>
        </div>

        <div className="search-item search-to">
          <div className="search-icon">
            <span className="item-icon icon-to"> </span>
          </div>
          <div className="search-inputs">
            <label className="text-14 color-grey">To</label>
            <PlacePicker onSelect={setDestination} />
          </div>
        </div>

        <div className="search-item search-button">
          <button className="btn btn-search" type="button" onClick={handleBooking}>
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
