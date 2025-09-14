import { facts } from "@/data/facts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section banner-homepage6">
      <div className="container-fluid">
        <div className="banner-homepage7">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-xxl-4 col-xl-2 col-lg-12"></div>
                <div className="col-xxl-8 col-xl-10 col-lg-12">
                  <div className="box-banner-homepage7-left">
                    <h2 className="heading-44-medium color-text mb-30 wow fadeInUp">
                      Download the app
                    </h2>
                    <p className="text-16 color-text wow fadeInUp">
                      Easily book, change, or cancel rides on the go. Think of
                      it as peace of mind in the palm of your hand.
                    </p>
                    <div className="box-button-banner mt-50 wow fadeInUp">
                      <div className="box-button-download">
                        <a
                          className="btn btn-download mr-15 hover-up wow fadeInUp"
                          href="#"
                        >
                          <div className="inner-download">
                            <div className="icon-download">
                              <Image
                                width={19}
                                height={23}
                                src="/assets/imgs/template/icons/apple-icon.svg"
                                alt="luxride"
                              />
                            </div>
                            <div className="info-download">
                              <span className="text-download-top">
                                Download on the
                              </span>
                              <span className="text-14-medium">
                                Apple Store
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="btn btn-download hover-up wow fadeInUp"
                          href="#"
                        >
                          <div className="inner-download">
                            <div className="icon-download">
                              <Image
                                width={23}
                                height={26}
                                src="/assets/imgs/template/icons/google-icon.svg"
                                alt="luxride"
                              />
                            </div>
                            <div className="info-download">
                              <span className="text-download-top">
                                Download on the
                              </span>
                              <span className="text-14-medium">
                                Apple Store
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="box-banner-homepage7-right wow fadeInUp">
                <Image
                  width={850}
                  height={700}
                  style={{ height: "fit-content" }}
                  src="/assets/imgs/page/homepage7/banner.png"
                  alt="luxride"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="box-number-banner">
              {facts.map((elm, i) => (
                <div key={i} className="number-1 wow fadeInUp">
                  <h3 className="heading-44-medium color-white">
                    {elm.number}
                  </h3>
                  <p className="text-20 color-white">{elm.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="box-some-number wow fadeInUp">
              <h6 className="heading-24-medium color-white">
                Showcase some impressive
                <br className="d-none d-lg-block" />
                numbers.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
