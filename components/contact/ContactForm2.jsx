"use client";
import { contactCards } from "@/data/contact";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useEffect } from "react";

export default function ContactForm2() {
  useEffect(() => {
    activeInputFocus();
  }, []);

  return (
    <section className="section form-contact-2 mt-120 mb-70">
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-6 mt-50 mb-50">
            <h2 className="heading-44-medium color-text mb-60 wow fadeInUp">
              Leave us your info
            </h2>
            <div className="form-contact form-comment wow fadeInUp">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullname">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="fullname"
                        type="text"
                        defaultValue="Ali Tufan"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        className="form-control"
                        id="subject"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-primary" type="submit">
                      Get In Touch
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
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 mt-50 mb-50">
            <div className="box-offices wow fadeInUp">
              <h2 className="heading-44-medium color-text mb-60">
                Our offices
              </h2>
              <div className="row">
                {contactCards.map((elm, i) => (
                  <div key={i} className="col-lg-6 col-sm-6 mb-30">
                    <div className="cardContact wow fadeInUp">
                      <div className="cardImage mb-30">
                        <img src={elm.imageSrc} alt="luxride" />
                      </div>
                      <div className="cardInfo">
                        <h6 className="heading-20-medium mb-10">
                          {elm.city} Office
                        </h6>
                        <p className="text-16 mb-20">{elm.address}</p>
                        <p className="text-16 mb-20">{elm.phone}</p>
                        <p className="text-16">{elm.email}</p>
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
