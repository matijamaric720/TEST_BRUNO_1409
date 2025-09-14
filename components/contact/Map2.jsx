import React from "react";

export default function Map2() {
  return (
    <section className="section bg-primary banner-about">
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="padding-box">
              <h1 className="heading-44-medium color-white mb-5">Contact Us</h1>
              <div className="box-breadcrumb">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="service-grid.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="mt-60">
                <ul className="list-contact-infos wow fadeInUp">
                  <li>
                    <div className="contact-icon">
                      <img
                        src="/assets/imgs/page/contact/location.png"
                        alt="luxride"
                      />
                    </div>
                    <div className="contact-info">
                      <h6 className="heading-20-medium color-white">
                        Location
                      </h6>
                      <p className="text-16 color-white">
                        PO Box 16122 Collins Street West Victoria 8007 Australia
                      </p>
                      <a
                        className="cardLink btn btn-link color-white hover-up"
                        href="#"
                      >
                        View On Google Map
                        <svg
                          className="icon-16"
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
                  </li>
                  <li>
                    <div className="contact-icon">
                      <img
                        src="/assets/imgs/page/contact/phone.png"
                        alt="luxride"
                      />
                    </div>
                    <div className="contact-info">
                      <h6 className="heading-20-medium color-white">Phone</h6>
                      <p className="text-16 color-white">
                        <a
                          className="cardLink btn btn-link color-white hover-up"
                          href="tel:+3239029201"
                        >
                          +32 39 029 201
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <img
                        src="/assets/imgs/page/contact/email.png"
                        alt="luxride"
                      />
                    </div>
                    <div className="contact-info">
                      <h6 className="heading-20-medium color-white">Email</h6>
                      <p className="text-16 color-white">
                        <a
                          className="cardLink btn btn-link color-white hover-up"
                          href="mailto:info@luxride.com"
                        >
                          info@luxride.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-banner-right box-banner-contact-2 wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1679223612023!5m2!1svi!2s"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
