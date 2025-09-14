import { features3 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section box-reliability">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="box-reliability-inner">
              <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                Reliability, worldwide
              </h2>
              <p className="text-16 color-text mb-20 wow fadeInUp">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit.
              </p>
              <ul className="list-ticks list-ticks-style-2 wow fadeInUp">
                {features3.map((elm, i) => (
                  <li key={i}>{elm}</li>
                ))}
              </ul>
              <div className="mt-30">
                <a className="btn btn-primary wow fadeInUp" href="#">
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
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={1710}
              height={1711}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/homepage6/img1.png"
              alt="luxride"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
