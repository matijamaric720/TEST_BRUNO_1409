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

export default function Footer1() {
  return (
    <footer className="footer">
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
                      style={{ height: "fit-content" }}
                      src="/assets/imgs/template/logo.svg"
                      alt="Luxride"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-lg-3 width-20">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Company Info
              </h5>
              <ul className="menu-footer wow fadeInUp text-white">
                <li>Bone Travel d.o.o</li>
                <li>Kozarićeva ulica 4</li>
                <li>10360 Zagreb, Croatia</li>
                <li>VAT HR63456353294</li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Links
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links2.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Contact
              </h5>
              <p className="menu-footer wow fadeInUp text-white">
                <a href="mail:bonetravel@gmail.com" className="color-white">bonetravel@gmail.com</a>
              </p>
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
                  © {new Date().getFullYear()} Bone Travel
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
                  Zagreb
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
