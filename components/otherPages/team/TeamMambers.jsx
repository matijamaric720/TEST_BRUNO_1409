import { teamMembers } from "@/data/team";
import Image from "next/image";
import Link from "next/link";

export default function TeamMambers() {
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="row align-items-end">
          <div className="col-lg-7 col-7">
            <h2 className="heading-44-medium color-text wow fadeInUp">
              Meet Our Team of Experts in
              <br className="d-none d-lg-block" />
              Manager and Marketing
            </h2>
          </div>
          <div className="col-lg-5 col-5 text-end">
            <p className="text-16 color-text wow fadeInUp">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="row mt-60">
          {teamMembers.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="cardTeam wow fadeInUp">
                <div className="cardImage">
                  <Image
                    width={810}
                    height={990}
                    style={{ height: "fit-content" }}
                    src={elm.imageSrc}
                    alt="luxride"
                  />
                  <div className="box-arrow-up-link">
                    <Link
                      className="cardLink btn btn-arrow-up"
                      href={`/team-single/${elm.id}`}
                    >
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
                    </Link>
                  </div>
                </div>
                <div className="cardInfo">
                  <h6 className="text-18-medium">{elm.name}</h6>
                  <p className="text-14 color-grey">{elm.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
