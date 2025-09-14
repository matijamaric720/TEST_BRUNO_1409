"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("creativelayers088@gmail.com");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <section className="section mt-120 mb-100">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">Creat Account</h2>
          <p className="color-text text-14 wow fadeInUp">
            Sign in with this account across the following sites.
          </p>
        </div>
        <div className="box-login mt-70">
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-12">
                  <div className={`form-group ${userName ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="fullname">
                      Username
                    </label>
                    <input
                      className={`form-control ${userName ? "filled" : ""}`}
                      id="fullname"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={`form-group ${email ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="Email">
                      Email
                    </label>
                    <input
                      className={`form-control ${email ? "filled" : ""}`}
                      id="Email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={`form-group ${password ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className={`form-control ${password ? "filled" : ""}`}
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={`form-group ${cpassword ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="confirmpass">
                      Confirm Password
                    </label>
                    <input
                      className={`form-control ${cpassword ? "filled" : ""}`}
                      id="confirmpass"
                      type="password"
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={`form-group ${phone ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className={`form-control ${phone ? "filled" : ""}`}
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-primary w-100" type="submit">
                    Creat Account
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
                <div className="col-lg-12">
                  <div className="text-or-box">
                    <span className="text-or">OR</span>
                  </div>
                  <div className="mb-20">
                    <a className="btn btn-login-google" href="#">
                      Continue Google
                    </a>
                  </div>
                  <div className="mb-20">
                    <a className="btn btn-login-facebook" href="#">
                      Continue Facebook
                    </a>
                  </div>
                  <div className="mb-20">
                    <a className="btn btn-login-apple" href="#">
                      Continue Apple
                    </a>
                  </div>
                </div>
                <div className="mt-0 text-center">
                  <span className="text-14-medium color-text">
                    Already a Memember{" "}
                  </span>
                  <a className="text-14-medium color-text" href="#">
                    Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
