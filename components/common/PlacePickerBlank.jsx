"use client";
import { locations } from "@/data/locations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PlacePickerBlank() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    locations[0].placeName
  );
  const [inputValue, setInputValue] = useState(""); // <-- Add this state

  const inputRef = useRef();

  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", addInactive);
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
        placeholder="Type your destination"
        value={inputValue} // <-- Bind value to state
        onChange={(e) => setInputValue(e.target.value)} // <-- Handle input changes
      />
    </>
  );
}
