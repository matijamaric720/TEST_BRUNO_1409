"use client";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";

import { carBrands, carTypes, cars } from "@/data/cars";
import Image from "next/image";
export default function FeetList3() {
  const [selectedCarTypes, setSelectedCarTypes] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCars, setSelectedCars] = useState(cars);
  useEffect(() => {
    let items = cars;
    if (selectedCarTypes != "All") {
      items = items.filter((elm) => elm.carType == selectedCarTypes);
    }
    if (selectedBrand != "All") {
      items = items.filter((elm) => elm.brand == selectedBrand);
    }
    setSelectedCars(items);
  }, [selectedCarTypes, selectedBrand]);
  return (
    <section className="section pt-60 bg-white latest-new-white">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start mb-30">
            <h2 className="heading-24-medium wow fadeInUp">
              Choose Your Fleet
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-end mb-30 wow fadeInUp">
            <div className="dropdown dropdown-menu-box">
              <a
                className="dropdown-toggle"
                id="dropdownMenuButton1"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vehicle Type
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {carTypes.map((elm, i) => (
                  <li key={i} onClick={() => setSelectedCarTypes(elm)}>
                    <a
                      className={`dropdown-item cursor-pointer ${
                        selectedCarTypes == elm ? "car-filter-active" : ""
                      }`}
                    >
                      {elm}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown dropdown-menu-box">
              <a
                className="dropdown-toggle"
                id="dropdownMenuButton2"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vehicle Make
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                {carBrands.map((elm, i) => (
                  <li key={i} onClick={() => setSelectedBrand(elm)}>
                    <a
                      className={`dropdown-item cursor-pointer ${
                        selectedBrand == elm ? "car-filter-active" : ""
                      }`}
                    >
                      {elm}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-30 our-fleet-2">
          {selectedCars.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-30">
              <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                <div className="cardImage mb-30">
                  <a href="#">
                    <Image
                      width={1530}
                      height={711}
                      style={{ height: "fit-content" }}
                      src={elm.imgSrc}
                      alt="Luxride"
                    />
                  </a>
                </div>
                <div className="cardInfo">
                  <a href="#">
                    <h3 className="text-20-medium color-text mb-10">
                      {elm.title}
                    </h3>
                  </a>
                  <p className="text-14 color-text mb-30">{elm.description}</p>
                </div>
                <div className="cardInfoBottom">
                  <div className="passenger">
                    <span className="icon-circle icon-passenger"></span>
                    <span className="text-14">{elm.passenger}</span>
                  </div>
                  <div className="luggage">
                    <span className="icon-circle icon-luggage"></span>
                    <span className="text-14">{elm.luggage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!selectedCars.length && <div>No item found. Try another filter</div>}
        </div>
        <div className="text-center mt-40 mb-120 wow fadeInUp">
          <nav className="box-pagination">
            <Pagination />
          </nav>
        </div>
      </div>
    </section>
  );
}
