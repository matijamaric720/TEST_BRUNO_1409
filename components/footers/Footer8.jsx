import { legalLinks, links1, links2 } from "@/data/footerLinks";
import Link from "next/link";

export default function Footer9() {
  return (
    <footer className="footer footer-6 footer-8">
      <div className="footer-box-inner">
        <div className="footer-1">
          <div className="container-sub">
            <div className="row mb-40">
              <div className="col-lg-8 wow fadeInUp">
                <h2 className="heading-44-medium color-text mb-20">
                  Contact Us
                </h2>
                <p className="text-16 color-text mb-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br className="d-none d-lg-block" />
                  Suspendisse varius
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 mb-30">
                    <span className="text-14 color-text-2">Address</span>
                    <p className="text-18-medium color-text mt-5 address-footer">
                      184 Main Collins Street West Victoria 8007
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 mb-30">
                    <span className="text-14 color-text-2">Working Hours</span>
                    <p className="text-18-medium color-text mt-5 time-footer">
                      Mon-Sat: 09:00 - 17:00
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 mb-30">
                    <span className="text-14 color-text-2">
                      Call Our Office
                    </span>
                    <p className="text-18-medium color-text mt-5 call-footer">
                      +41 22 715 7000
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="text-18-medium color-text mb-20">Company</h5>
                    <ul className="menu-footer">
                      {links1.map((elm, i) => (
                        <li key={i}>
                          <Link href={elm.href}>{elm.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-18-medium color-text mb-20">
                      Top cities
                    </h5>
                    <ul className="menu-footer">
                      {links2.map((elm, i) => (
                        <li key={i}>
                          <a href={elm.href}>{elm.name}</a>
                        </li>
                      ))}
                    </ul>
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
                  <span className="text-14 color-text mr-50">
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
      </div>
    </footer>
  );
}
