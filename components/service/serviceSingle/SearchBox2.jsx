"use client";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";
import React, { useState } from "react";
import Image from "next/image";

export default function SearchBox({ service }) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <section className="section">
      <div className="banner-image-service wow fadeInUp"></div>
      <div className="box-form-service-single">
        <div className="box-search-ride box-search-ride-style-2 wow fadeInUp  light-input">
          
            
        </div>
      </div>
    </section>
  );
}
