import { facts } from "@/data/facts";
import { features3 } from "@/data/features";
import Image from "next/image";

export default function Features2() {
  return (
    <div className="box-comfortable-home9">
      <section className="section pt-120">
        <div className="container-sub">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-60">
              <div className="box-image-showcase">
                <Image
                  width={1410}
                  height={1650}
                  src="/assets/imgs/page/homepage2/showcase.png"
                  style={{ height: "fit-content" }}
                  alt="luxride"
                />
                <div className="box-number-servered">
                  <div className="row align-items-center">
                    {facts.map((elm, i) => (
                      <div key={i} className="col-sm-4 col-6 mb-30">
                        <div className="box-number-info wow fadeInUp">
                          <span className="text-20-medium text-number">
                            {elm.number}
                          </span>
                          <span className="text-14 text-number-info">
                            {elm.text}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-60">
              <div className="box-region-right">
                <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                  Reliability, worldwide
                </h2>
                <p className="text-16 color-text mb-30 wow fadeInUp">
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla
                  suscipit.
                </p>
                <ul className="list-ticks list-ticks-style-2 wow fadeInUp">
                  {features3.map((elm, i) => (
                    <li key={i}>{elm}</li>
                  ))}
                </ul>
                <div className="mt-30">
                  <a className="btn btn-secondary wow fadeInUp" href="#">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
