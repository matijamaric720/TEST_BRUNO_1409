"use client";
import { reviews, socials, tags } from "@/data/blogs";
import Image from "next/image";
import { useState } from "react";

export default function BlogSingle({ blog }) {
  const [fullName, setFullName] = useState("Test");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="section pt-60 bg-white latest-new-white">
      <div className="container-sub">
        <div className="box-frature-image mb-60 wow fadeInUp">
          <div className="cardImage">
            <div className="datePost">
              <div className="heading-52-medium color-white">
                {blog.date ? blog.date : "14"}.
              </div>
              <p className="text-14 color-white">
                {blog.monthYear ? blog.monthYear : "Jun, 2022"}
              </p>
            </div>
            <Image
              width={1170}
              height={600}
              style={{ height: "fit-content" }}
              src={
                blog.imageSrc
                  ? blog.imageSrc
                  : "/assets/imgs/page/blog2/img-single.png"
              }
              alt="luxride"
            />
          </div>
        </div>
        <h2 className="heading-44-medium mb-30 wow fadeInUp">{blog.title}</h2>
        <div className="content-single wow fadeInUp">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <blockquote>
            “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
            Diam phasellus <br className="d-nond d-lg-block" />
            vestibulum lorem sed risus ultricies. Magna sit amet purus gravida
            quis blandit. Arcu <br className="d-nond d-lg-block" />
            cursus vitae congue mauris.“
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            <Image
              width={1170}
              height={600}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/blog2/img-single2.png"
              alt="luxride"
            />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="row">
            <div className="col-lg-6 mb-30">
              <Image
                width={570}
                height={600}
                style={{ height: "fit-content" }}
                src="/assets/imgs/page/blog2/img-single3.png"
                alt="luxride"
              />
            </div>
            <div className="col-lg-6 mb-30">
              <Image
                width={570}
                height={600}
                style={{ height: "fit-content" }}
                src="/assets/imgs/page/blog2/img-single4.png"
                alt="luxride"
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <h2 className="heading-44-medium">Natural Habitat Adventures</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="box-share-tags mt-50 wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30 text-lg-start text-center">
              <span className="text-16-medium color-text mr-15">Share</span>
              <div className="d-inline-block social-single">
                {socials.map((elm, i) => (
                  <a
                    key={i}
                    className={`icon-socials icon-${elm.name}`}
                    href="#"
                  ></a>
                ))}
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mb-30 text-center">
              {tags.slice(0, 4).map((elm, i) => (
                <a key={i} className="btn btn-tag mr-10 mb-10" href={elm.href}>
                  {elm.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-bottom mb-30 mt-60"></div>
        <div className="author-box wow fadeInUp">
          <div className="item-author">
            <div className="item-author-image">
              <Image
                width={210}
                height={210}
                src="/assets/imgs/page/blog2/author.png"
                alt="luxride"
              />
            </div>
            <div className="item-author-info">
              <h6 className="text-18-medium">Esther Howard</h6>
              <p className="text-14 color-grey">Marketing Coordinator</p>
              <p className="text-16 color-text">
                Etiam vitae leo et diam pellentesque porta. Sed eleifend
                ultricies risus, vel rutrum erat commodo ut. Praesent finibus
                congue euismod. Nullam scelerisque massa vel augue placerat, a
                tempor sem egestas. Curabitur placerat finibus lacus.
              </p>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-30 mt-60"></div>
        <div className="box-pagination-single wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-5 col-5">
              <div className="box-pager-inner">
                <a className="prev-page text-18-medium" href="#">
                  Prev
                  <svg
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    ></path>
                  </svg>
                </a>
                <p className="pl-40 text-16 color-text d-none d-sm-block">
                  The most efficient airlines and airports globally
                </p>
              </div>
            </div>
            <div className="col-lg-2 text-center col-sm-2 col-2">
              <a href="#">
                <Image
                  width={20}
                  height={20}
                  src="/assets/imgs/page/blog2/grid.png"
                  alt="luxride"
                />
              </a>
            </div>
            <div className="col-lg-5 col-sm-5 col-5">
              <div className="box-pager-inner text-end">
                <a className="next-page text-18-medium" href="#">
                  Next
                  <svg
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </a>
                <p className="pr-40 text-16 color-text d-none d-sm-block">
                  The most efficient airlines and airports globally
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-50 mt-25"></div>
        <div className="box-reviews wow fadeInUp">
          <h5 className="text-20-medium color-text mb-30">Reviews</h5>
          {reviews.map((elm, i) => (
            <div key={i} className="item-reviews">
              <div className="item-author-info">
                <div className="item-avatar">{elm.authorInitials}</div>
                <div className="item-info">
                  <h6 className="text-16-medium">{elm.authorName}</h6>
                  <p className="text-14 color-grey">{elm.date}</p>
                </div>
              </div>
              <div className="item-desc">
                <p className="color-text text-16">{elm.description}</p>
              </div>
              <div className="buttons-like">
                <a className="btn btn-like mr-30" href="#">
                  Helpful
                </a>
                <a className="btn btn-dislike" href="#">
                  Not helpful
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="border-bottom mb-50 mt-60"></div>
        <div className="box-form-comment wow fadeInUp">
          <h5 className="text-20-medium mb-30">Leave a Comment</h5>
          <p className="text-14 color-text mb-30">
            Your email address will not be published.
          </p>
          <div className="form-comment">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={`form-group ${fullName ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="fullname">
                      Your Name
                    </label>
                    <input
                      className={`form-control ${fullName ? "filled" : ""}`}
                      id="fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={`form-group ${email ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className={`form-control ${email ? "filled" : ""}`}
                      id="email"
                      type="text"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={`form-group ${message ? "focused" : ""}`}>
                    <label className="form-label" htmlFor="comment">
                      Write Your Comment
                    </label>
                    <textarea
                      className={`form-control ${message ? "filled" : ""}`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="comment"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-primary" type="submit">
                    Post Review
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
      </div>
    </section>
  );
}
