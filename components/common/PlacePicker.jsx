"use client";
import { locations } from "@/data/locations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PlacePicker() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    locations[0].placeName
  );
  const inputRef = useRef();
  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
    document.addEventListener("click", function (event) {
      // Check if click occurred inside mobileMenuInner
    });
  };
  useEffect(() => {
    document.addEventListener("click", (e) => addInactive(e));
    return () => {
      document.removeEventListener("click", addInactive);
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        className="search-input dropdown-location"
        onClick={() => setIsActive((pre) => !pre)}
        type="text"
        placeholder=""
        value={selectedLocation}
        readOnly
      />
      <div
        className="box-dropdown-location"
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <div className="list-locations">
          {locations.map((elm, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedLocation(elm.placeName);
              }}
              className="item-location"
            >
              <div className="location-icon">
                <Image width={16} height={16} src={elm.icon} alt="luxride" />
              </div>
              <div className="location-info">
                <h6 className="text-16-medium color-text title-location">
                  {elm.placeName}
                </h6>
                <p className="text-14 color-grey searchLocations">
                  {elm.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
