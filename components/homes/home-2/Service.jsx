import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">Our Services</h2>
        </div>
        <div className="row mt-60">
          {services.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 mb-30">
              <div className="cardServiceStyle2 wow fadeInUp">
                <div className="cardImage">
                  <Link href={`/service-single/${elm.id}`}>
                    <Image
                      width={370}
                      height={400}
                      src={elm.image}
                      style={{ height: "fit-content" }}
                      alt="Luxride"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle text-20-medium color-text mb-10">
                    {elm.title}
                  </h3>
                  <p className="cardDesc text-14 color-text mb-10">
                    {elm.description}
                  </p>
                  <Link
                    className="cardLink btn btn-link hover-up"
                    href={`/service-single/${elm.id}`}
                  >
                    Learn more
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
