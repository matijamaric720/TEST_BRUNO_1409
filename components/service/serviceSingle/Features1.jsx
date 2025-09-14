import { features9 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features1() {
  return (
    <section className="section mt-90">
      <div className="container-sub">
        <div className="row cardIconTitleDescLeft">
          {features9.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="cardIconTitleDesc wow fadeInUp">
                <div className="cardIcon">
                  <Image
                    width={512}
                    height={256}
                    src={elm.iconSrc}
                    alt="luxride"
                  />
                </div>
                <div className="cardTitle">
                  <h5 className="text-20-medium color-text">{elm.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
