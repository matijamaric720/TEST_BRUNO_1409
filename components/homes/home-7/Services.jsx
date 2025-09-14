import { features4 } from "@/data/features";
import Image from "next/image";

export default function Services() {
  return (
    <section className="section mt-120 mb-30 bg-region bg-enjoy">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 wow fadeInUp">
            <Image
              width={900}
              height={900}
              src="/assets/imgs/page/homepage7/img1.png"
              style={{ height: "fit-content" }}
              alt="luxride"
            />
          </div>
          <div className="col-lg-7 mt-30 mb-30">
            <div className="box-region-right wow fadeInUp">
              <h2 className="heading-44-medium color-text mb-30">
                Enjoy The Freedom Of Rental Anywhere You Want
              </h2>
              <p className="text-16 color-text mb-30">
                Nullam sed ultricies erat, nec euismod metus. Morbi porttitor
                sapien vitae leo scelerisque. Nullam sed ultricies erat.
              </p>
              <ul className="list-ticks list-ticks-style-2 mb-30">
                {features4.map((elm, i) => (
                  <li key={i}>{elm.name}</li>
                ))}
              </ul>
              <a className="btn btn-primary">
                See All Vehicles
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
