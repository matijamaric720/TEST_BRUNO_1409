import { cars } from "@/data/cars";
import Image from "next/image";
import React from "react";

export default function Style4() {
  return (
    <>
      {" "}
      <div className="row mt-30 align-items-center">
        <div className="col-lg-6">
          <h2 className="heading-24-medium wow fadeInUp">List Style V4</h2>
        </div>
      </div>
      <div className="row mt-30">
        {cars.slice(0, 4).map((elm, i) => (
          <div className="col-lg-3 col-md-6 mb-30">
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
      </div>
    </>
  );
}
