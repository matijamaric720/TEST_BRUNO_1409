import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section className="section bg-our-service-home-9">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7 col-7">
            <h2 className="color-text heading-44-medium wow fadeInUp">
              Our Services
            </h2>
          </div>
          <div className="col-lg-6 col-sm-5 col-5 text-end">
            <Link
              className="text-16-medium color-text d-flex align-items-center justify-content-end wow fadeInUp"
              href="/service-grid"
            >
              More Services
              <svg
                className="icon-16 ml-5"
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
        <div className="row align-item-center mt-60">
          {services.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="cardService cardServiceStyle4 wow fadeInUp">
                <Link href={`/service-single/${elm.id}`}>
                  <div className="cardImage">
                    <Image
                      width={370}
                      height={400}
                      src={elm.image}
                      style={{ height: "fit-content" }}
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
      </div>
    </section>
  );
}
