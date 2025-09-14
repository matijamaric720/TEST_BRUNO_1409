"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cars } from "@/data/cars";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";

const BASE_PRICE = 40;
const PER_KM_PRICE = 1.2;

export default function BookingVehicles() {
  const searchParams = useSearchParams();

  const [distance, setDistance] = useState("0.00");
  const [placeInput, setPlaceInput] = useState("");
  const [origin, setOrigin] = useState({ lat: 45.815, lng: 15.9819 }); // Default to Zagreb
  const [destination, setDestination] = useState(null);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);

  const totalPrice = Math.max(BASE_PRICE, distance * PER_KM_PRICE).toFixed(2);

  // Get query params on first load
  useEffect(() => {
    const destLat = searchParams.get("destinationLat");
    const destLng = searchParams.get("destinationLng");
    const inputValue = searchParams.get("input");
    const carIndex = searchParams.get("selectedCar");

    if (inputValue) {
      const decodedInput = decodeURIComponent(inputValue);
      setPlaceInput(decodedInput);
    }

    if (destLat && destLng) {
      setDestination({
        lat: parseFloat(destLat),
        lng: parseFloat(destLng),
      });
    }

    if (carIndex) {
      setSelectedCarIndex(parseInt(carIndex));
    }
  }, [searchParams]);

  // Calculate distance when origin/destination updates
  useEffect(() => {
    if (!origin || !destination) return;

    const getDistance = (lat1, lon1, lat2, lon2) => {
      if (lat1 === lat2 && lon1 === lon2) return 0;
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) dist = 1;
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515 * 1.609344; // Convert to kilometers
      return dist;
    };

    const d = getDistance(origin.lat, origin.lng, destination.lat, destination.lng);
    setDistance(d.toFixed(2));
  }, [origin, destination]);

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  const handleOriginSelect = (selectedOrigin) => {
    setOrigin(selectedOrigin);
  };

  return (
    <div className="box-row-tab mt-50">
      {/* LEFT: Car Selection */}
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Select Your Car
          </h3>

          <div className="list-vehicles wow fadeInUp">
            {cars.map((car, i) => (
              <div key={i} className={`item-vehicle wow fadeInUp ${selectedCarIndex === i ? 'selected' : ''}`}>
                <div className="vehicle-left">
                  <div className="vehicle-image">
                    <Image
                      width={1530}
                      height={711}
                      style={{ height: "fit-content" }}
                      src={car.imgSrc}
                      alt={car.title}
                    />
                  </div>
                  <div className="vehicle-facilities">
                    <div className="text-fact meet-greeting">Meet & Greet included</div>
                    <div className="text-fact free-waiting">15 Minute Waiting time</div>
                    <div className="text-fact safe-travel">Safe and secure travel</div>
                  </div>
                </div>

                <div className="vehicle-right">
                  <h5 className="text-20-medium color-text mb-10">{car.title}</h5>
                  <p className="text-14 color-text mb-20">{car.description}</p>
                  <div className="vehicle-passenger-luggage mb-10">
                    <span className="passenger">{car.passenger}</span>
                    <span className="luggage">
                      {car.luggageL}
                      <br />
                      {car.luggageS}
                    </span>
                  </div>
                  <div className="vehicle-price">
                    <h4 className="heading-30-medium color-text">
                      Minimum price: 40€ – €1.20 / km
                    </h4>
                  </div>
                  <div className="price-desc mb-20">
                    All prices include VAT and road expenses
                  </div>

                  <Link
                    className="btn btn-primary w-100"
                    href={{
                      pathname: "/booking-passenger",
                      query: {
                        originLat: origin?.lat,
                        originLng: origin?.lng,
                        destinationLat: destination?.lat,
                        destinationLng: destination?.lng,
                        distance: distance,
                        input: placeInput,
                        selectedCar: i,
                        carTitle: car.title,
                        carDescription: car.description,
                        carPassenger: car.passenger,
                        carLuggageL: car.luggageL,
                        carLuggageS: car.luggageS,
                        carImgSrc: car.imgSrc,
                      },
                    }}
                    onClick={() => setSelectedCarIndex(i)}
                  >
                    Select
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Ride Summary Sidebar */}
      <div className="box-tab-right">
        <div className="sidebar">
          <div className="d-flex align-items-center justify-content-between wow fadeInUp">
            <h6 className="text-20-medium color-text">Ride Summary</h6>
          </div>

          {/* Origin & Destination */}
          <div className="mt-20 wow fadeInUp">
            <ul className="list-routes">
              <li>
                <span className="location-item">A</span>
                <span className="info-location text-14-medium">
                  <PlacePicker onSelect={handleOriginSelect} />
                </span>
              </li>
              <li>
                <span className="location-item">B</span>
                <span className="info-location text-14-medium">
                  <PlaceFinderBlank
                    key={placeInput}
                    onSelect={handleDestinationSelect}
                    defaultValue={placeInput}
                  />
                </span>
              </li>
            </ul>
          </div>

          {/* Date & Time */}
          <div className="mt-20 wow fadeInUp">
            <ul className="list-icons">
              <li>
                <span className="icon-item icon-plan" />
                <span className="info-location text-14-medium">
                  <DatePickerComponent />
                </span>
              </li>
              <li>
                <span className="icon-item icon-time" />
                <span className="info-location text-14-medium">
                  <TimePickerComponent />
                </span>
              </li>
            </ul>
          </div>

          {/* Map + Pricing */}
          <div className="mt-20 wow fadeInUp">
            <div className="box-map-route">
              <iframe
                className="map-contact"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11120.727283665392!2d16.142688!3d45.827642000000004!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ5JzM3LjAiTiAxNsKwMDgnMzIuNiJF!5e0!3m2!1sen!2sus!4v1744805782391!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="box-info-route">
              <div className="info-route-left">
                <span className="text-14 color-grey">Total Distance</span>
                <span className="text-14-medium color-text">{totalPrice} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}