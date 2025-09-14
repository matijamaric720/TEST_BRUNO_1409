import {
  legalLinks,
  links1,
  links2,
  links4,
  socialMediaPlatforms,
} from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer6() {
  return (
    <footer className="footer footer-6">
      <div className="footer-1">
        <div className="container-sub">
          <div className="row mb-40">
            <div className="col-lg-3 width-20 mb-30 wow fadeInUp">
              <h5 className="text-18-medium color-white mb-10">Address</h5>
              <p className="text-14 color-white mb-30">
                184 Main Collins Street West Victoria 8007
              </p>
              <h5 className="text-18-medium color-white mb-10">
                Call Our Office
              </h5>
              <p className="text-14 color-white mb-30">
                184 Main Collins Street West Victoria 8007
              </p>
              <h5 className="text-18-medium color-white mb-10">
                Working Hours
              </h5>
              <p className="text-14 color-white">
                Mon-Sat: 09:00 - 17:00
                <br />
                Sun: Closed
              </p>
            </div>
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
              <div className="mt-25">
                <div className="text-18-medium color-white mb-20">
                  Follow Us
                </div>
                {socialMediaPlatforms.map((elm, i) => (
                  <a key={i} className={elm.className} href={elm.href}></a>
                ))}
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
