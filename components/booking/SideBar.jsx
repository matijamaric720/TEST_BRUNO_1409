"use client";
import React, { useState, useEffect } from "react";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";
import { cars } from "@/data/cars";

export default function SideBar() {
  const [distance, setDistance] = useState(0);
  const [placeInput, setPlaceInput] = useState("");
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedCar, setSelectedCar] = useState(cars[0]); // Default vehicle (can be dynamically changed)
  const [extras, setExtras] = useState(["1 x Child Seat - $0.00"]); // Extra options (can also be dynamic)

  // Set origin, destination and place input
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inputValue = params.get("input");
    if (inputValue) {
      setPlaceInput(inputValue);
    }

    // Default example origin/destination (can be passed dynamically too)
    setOrigin({ lat: 45.815, lng: 15.9819 });
    setDestination({ lat: 46.815, lng: 17.9819 });
  }, []);

  // Calculate distance based on selected origin and destination
  useEffect(() => {
    if (!origin || !destination) return;

    const getDistance = (lat1, lon1, lat2, lon2, unit = "K") => {
      if (lat1 === lat2 && lon1 === lon2) return 0;
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.min(1, dist);
      dist = Math.acos(dist) * (180 / Math.PI) * 60 * 1.1515;
      if (unit === "K") dist *= 1.609344;
      if (unit === "N") dist *= 0.8684;
      return dist;
    };

    const d = getDistance(origin.lat, origin.lng, destination.lat, destination.lng, "K");
    setDistance(d.toFixed(2));
  }, [origin, destination]);

  return (
    <div className="box-tab-right">
      <div className="sidebar">
        <div className="d-flex align-items-center justify-content-between wow fadeInUp">
          <h6 className="text-20-medium color-text">Ride Summary</h6>
          <a className="text-14-medium color-text text-decoration-underline" href="/">
            Edit
          </a>
        </div>

        {/* Origin and Destination */}
        <div className="mt-20 wow fadeInUp">
          <ul className="list-routes">
            <li>
              <span className="location-item">A</span>
              <span className="info-location text-14-medium">
                <PlacePicker onSelect={setOrigin} />
              </span>
            </li>
            <li>
              <span className="location-item">B</span>
              <span className="info-location text-14-medium">
                <PlaceFinderBlank onSelect={setDestination} defaultValue={placeInput} />
              </span>
            </li>
          </ul>
        </div>

        {/* Date and Time */}
        <div className="mt-20 wow fadeInUp">
          <ul className="list-icons">
            <li>
              <span className="icon-item icon-plan"></span>
              <span className="info-location text-14-medium">
                <DatePickerComponent />
              </span>
            </li>
            <li>
              <span className="icon-item icon-time"></span>
              <span className="info-location text-14-medium">
                <TimePickerComponent />
              </span>
            </li>
          </ul>
        </div>

        {/* Map & Info */}
        <div className="mt-20 wow fadeInUp">
          <div className="box-map-route">
            <iframe
              className="map-contact"
              src="https://www.google.com/maps/embed?...your-link..."
              style={{ border: "0px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Total Distance */}
          <div className="box-info-route">
            <div className="info-route-left">
              <span className="text-14 color-grey">Total Distance</span>
              <span className="text-14-medium color-text">{distance} km</span>
            </div>
          </div>

          <div className="border-bottom mt-30 mb-25"></div>

          {/* Vehicle Information */}
          <div className="mt-0">
            <span className="text-14 color-grey">Vehicle</span>
            <br />
            <span className="text-14-medium color-text">{selectedCar?.name}</span>
          </div>

          <div className="border-bottom mt-30 mb-25"></div>

        </div>
      </div>

      {/* Price Information */}
      <div className="sidebar wow fadeInUp">
        <div className="border-bottom mt-30 mb-15"></div>
        <ul className="list-prices">
  <li>
    <span className="text text-20-medium">Total</span>
    <span className="price text-20-medium">${(distance * 1.2).toFixed(2)}</span>
  </li>
</ul>
      </div>
    </div>
  );
}
