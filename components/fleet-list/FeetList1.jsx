"use client";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { carBrands, carTypes, cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

export default function FeetList1() {
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
        </div>
        <div className="row mt-30">
          {selectedCars.slice(0, 6).map((elm, i) => (
            <div key={i} className="col-lg-4 mb-30">
              <div className="cardFleet wow fadeInUp">
                <div className="cardInfo">
                  <Link href={`/fleet-single/${elm.id}`}>
                    <h3 className="text-20-medium color-text mb-10">
                      {elm.title}
                    </h3>
                  </Link>
                  <p className="text-14 color-text mb-30">{elm.description}</p>
                </div>
                <div className="cardImage mb-30">
                  <Link href={`/fleet-single/${elm.id}`}>
                    <Image
                      width={1530}
                      height={711}
                      style={{ height: "128px", width: "256px" }}
                      src={elm.imgSrc}
                      alt="Luxride"
                    />
                  </Link>
                </div>
                <div className="cardInfoBottom">
                  <div className="passenger">
                    <span className="icon-circle icon-passenger"></span>
                    <span className="text-14">
                    <span>{elm.passenger}</span>
                    </span>
                  </div>
                  <div className="luggage">
                    <span className="icon-circle icon-luggage"></span>
                    <span className="text-14">
                    <span>{elm.luggageL}</span> <br></br>
                    <span>{elm.luggageS}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!selectedCars.length && <div>No item found. Try another filter</div>}
        </div>
        <div className="text-center mt-40 mb-120">
          <nav className="box-pagination">
            <Pagination />
          </nav>
        </div>
      </div>
    </section>
  );
}
