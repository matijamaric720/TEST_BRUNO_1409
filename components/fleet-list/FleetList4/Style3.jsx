import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Style3() {
  return (
    <>
      {" "}
      <div className="row mt-30 align-items-center">
        <div className="col-lg-6">
          <h2 className="heading-24-medium wow fadeInUp">List Style V3</h2>
        </div>
      </div>
      <div className="row mt-30 fleet-style-3">
        {cars.slice(0, 3).map((elm, i) => (
          <div className="col-lg-4 mb-30">
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
                    style={{ height: "fit-content" }}
                    src={elm.imgSrc}
                    alt="Luxride"
                  />
                </Link>
              </div>
              <div className="cardInfoBottom">
                <div className="passenger">
                  <span className="icon-circle icon-passenger"></span>
                  <span className="text-14">
                    Passengers<span>{elm.passenger}</span>
                  </span>
                </div>
                <div className="luggage">
                  <span className="icon-circle icon-luggage"></span>
                  <span className="text-14">
                    Luggage<span>{elm.luggage}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
