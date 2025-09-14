import { legalLinks, socialMediaPlatforms } from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer5() {
  return (
    <footer className="footer footer-5">
      <div className="footer-1">
        <div className="container-sub">
          <div className="box-footer-top">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 text-md-start text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <a className="mr-30" href="#">
                    <Image
                      width={150}
                      height={19}
                      src="/assets/imgs/template/logo.svg"
                      style={{ height: "fit-content" }}
                      alt="Luxride"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-md-end text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  {socialMediaPlatforms.map((elm, i) => (
                    <a key={i} className={elm.className} href={elm.href}></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40 justify-content-between">
            <div className="col-lg-3 width-25 wow fadeInUp">
              <h6 className="text-14 color-white-2 mb-20">Address</h6>
              <p className="color-white address-footer">
                184 Main Collins Street West Victoria 8007
              </p>
            </div>
            <div className="col-lg-3 width-25 mb-30 wow fadeInUp">
              <h6 className="text-14 color-white-2 mb-20">Call Our Office</h6>
              <a
                className="text-14-medium call-phone color-white hover-up d-inline-block mb-20"
                href="tel:+41227157000"
              >
                +41 22 715 7000
              </a>
            </div>
            <div className="col-lg-3 width-25 mb-30 wow fadeInUp">
              <h6 className="text-14 color-white-2 mb-20">Working Hours</h6>
              <span className="text-14-medium time-footer color-white hover-up d-inline-block mb-20">
                Mon-Sat: 09:00 - 17:00 - Sun: Closed
              </span>
            </div>
            <div className="col-lg-3 width-20 text-start text-md-end wow fadeInUp">
              <div className="d-inline-block text-start">
                <h6 className="text-14 color-white-2 mb-20">
                  Download The App
                </h6>
                <div className="text-start">
                  <div className="box-button-download">
                    <a
                      className="btn btn-download hover-up wow fadeInUp"
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
                          <span className="text-14-medium">Apple Store</span>
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
                          <span className="text-14-medium">Apple Store</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container-sub">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <span className="text-14 color-white mr-50">
                  © {new Date().getFullYear()} Luxride
                </span>
                <ul className="menu-bottom">
                  {legalLinks.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.href}>{elm.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <a className="btn btn-link-location" href="#">
                  New York
                </a>
                <a className="btn btn-link-globe active" href="#">
                  English
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
