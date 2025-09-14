import React from "react";
import Pagination from "../common/Pagination";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Services3() {
  return (
    <div className="section pt-60">
      <div className="container-sub">
        <div className="row">
          {services.slice(0, 6).map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6 mb-30">
              <div className="cardService cardServiceStyle4 wow fadeInUp">
                <Link href={`/service-single/${elm.id}`}>
                  <div className="cardImage">
                    <Image
                      width={370}
                      height={400}
                      style={{ height: "fit-content" }}
                      src={elm.image}
                      alt="Luxride"
                    />
                  </div>
                  <div className="cardInfo">
                    <h3 className="cardTitle text-20-medium color-white mb-10">
                      {elm.title}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-40 mb-120 wow fadeInUp">
          <nav className="box-pagination">
            <Pagination />
          </nav>
        </div>
      </div>
    </div>
  );
}
