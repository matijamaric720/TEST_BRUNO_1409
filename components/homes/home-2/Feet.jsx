import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

export default function Feet() {
  return (
    <section className="section pt-120 box-fleet-cover">
      <div className="box-fleet-padding">
        <div className="container-sub">
          <div className="row align-items-center">
            <div className="col-lg-6 col-7">
              <h2 className="heading-44-medium title-fleet wow fadeInUp">
                Our Fleet
              </h2>
            </div>
            <div className="col-lg-6 col-5 text-end">
              <Link
                className="text-16-medium color-primary wow fadeInUp"
                href="/fleet-list"
              >
                More Fleet
                <svg
                  className="icon-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="row mt-50">
            {cars.slice(0, 3).map((elm, i) => (
              <div key={i} className="col-lg-4">
                <div className="cardFleet cardFleetStyle2 wow fadeInUp">
                  <div className="cardInfo">
                    <a href="#">
                      <h3 className="text-20-medium color-text mb-10">
                        {elm.title}
                      </h3>
                    </a>
                    <p className="text-14 color-text mb-30">
                      {elm.description}
                    </p>
                  </div>
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
        </div>
      </div>
    </section>
  );
}
