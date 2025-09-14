import { faqs2 } from "@/data/faq";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="section pt-120 pb-90">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">How It Works</h2>
        </div>
        <div className="row mt-60 align-items-center">
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={570}
              height={600}
              style={{ height: "fit-content" }}
              className="w-100 bd-rd6"
              src="/assets/imgs/page/homepage5/img-how.png"
              alt="Luxride"
            />
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-region-right wow fadeInUp">
              <div
                className="accordion accordion-style-2 wow fadeInUp"
                id="accordionFAQ"
              >
                {faqs2.map((elm, i) => (
                  <div key={i} className="accordion-item">
                    <h5 className="accordion-header" id={`heading${i}`}>
                      <button
                        className={`accordion-button heading-32-medium color-text ${
                          i ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${i}`}
                        aria-expanded={`${!i ? "true" : "false"}`}
                        aria-controls={`collapse${i}`}
                      >
                        {elm.question}
                      </button>
                    </h5>
                    <div
                      className={`accordion-collapse collapse ${
                        !i ? "show" : ""
                      }`}
                      id={`collapse${i}`}
                      aria-labelledby={`heading${i}`}
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        {elm.answer} <br />
                        <a
                          className="text-16-medium hover-up mt-10 d-block"
                          href="#"
                        >
                          Explore
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
