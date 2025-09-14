import {
  legalLinks,
  links1,
  links2,
  links3,
  links4,
  socialMediaPlatforms,
} from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="footer footer-white">
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
                      src="/assets/imgs/template/logo-black.svg"
                      alt="Luxride"
                    />
                  </a>
                  <a
                    className="text-14-medium call-phone color-white hover-up"
                    href="tel:+41227157000"
                  >
                    +41 22 715 7000
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-md-end text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <span className="text-18-medium color-white mr-10">
                    Follow Us
                  </span>
                  {socialMediaPlatforms.map((elm, i) => (
                    <a key={i} className={elm.className} href={elm.href}></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-lg-3 width-20 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-20">Company</h5>
              <ul className="menu-footer">
                {links1.map((elm, i) => (
                  <li key={i}>
                    <Link href={elm.href}>{elm.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-20">Top cities</h5>
              <ul className="menu-footer">
                {links2.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-20">Explore</h5>
              <ul className="menu-footer">
                {links3.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-20">Classes</h5>
              <ul className="menu-footer">
                {links4.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-20">
                Download The App
              </h5>
              <div className="text-start">
                <div className="box-button-download">
                  <a
                    className="btn btn-download mb-20 hover-up wow fadeInUp"
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
                    className="btn btn-download mb-20 hover-up wow fadeInUp"
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
