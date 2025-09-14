import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="section pt-120 pb-120 bg-region">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="box-gallery justify-content-center justify-content-lg-start">
              <div className="gallery-1 wow fadeInUp">
                <Image
                  width={311}
                  height={570}
                  style={{ height: "fit-content" }}
                  src="/assets/imgs/page/homepage1/img1.png"
                  alt="luxride"
                />
              </div>
              <div className="gallery-2 wow fadeInUp">
                <Image
                  width={249}
                  height={280}
                  style={{ height: "fit-content" }}
                  src="/assets/imgs/page/homepage1/img2.png"
                  alt="luxride"
                />
                <Image
                  width={249}
                  height={280}
                  style={{ height: "fit-content" }}
                  src="/assets/imgs/page/homepage1/img3.png"
                  alt="luxride"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-region-right wow fadeInUp">
              <h2 className="heading-44-medium color-text mb-30">
                From the region, for the region
              </h2>
              <p className="text-16 color-text mb-30">
                Superide operates in more than 120 cities in 18 countries from
                Morocco to Pakistan.
              </p>
              <Link className="btn btn-primary" href="/fleet-list">
                View All Cities
                <svg
                  className="icon-16 ml-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
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
      </div>
    </section>
  );
}
