import { services2 } from "@/data/services";
import Image from "next/image";

export default function Service() {
  return (
    <section className="section pt-120 pb-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
              Our Services
            </h2>
            <p className="text-16 color-text mb-20 wow fadeInUp">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla
              suscipit.
            </p>
            <ul className="list-ticks list-ticks-style-2 wow fadeInUp">
              {services2.map((elm, i) => (
                <li key={i}>{elm.text}</li>
              ))}
            </ul>
            <div className="mt-30 wow fadeInUp">
              <a className="btn btn-primary" href="#">
                Learn More
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
          <div className="col-lg-6 mb-30">
            <div className="box-image-showcase gallery-home-4 wow fadeInUp">
              <div className="box-image-top text-center mb-20">
                <Image
                  width={370}
                  height={280}
                  src="/assets/imgs/page/homepage4/img1.png"
                  alt="luxride"
                />
              </div>
              <div className="box-image-bottom text-center d-flex justify-content-md-center justify-content-start">
                <div className="box-image-1">
                  <Image
                    width={249}
                    height={159}
                    style={{ height: "fit-content" }}
                    src="/assets/imgs/page/homepage4/img3.png"
                    alt="luxride"
                  />
                  <Image
                    width={150}
                    height={150}
                    style={{ height: "fit-content" }}
                    src="/assets/imgs/page/homepage4/img4.png"
                    alt="luxride"
                  />
                </div>
                <div className="box-image-2">
                  <Image
                    width={370}
                    height={280}
                    style={{ height: "fit-content" }}
                    src="/assets/imgs/page/homepage4/img2.png"
                    alt="luxride"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
