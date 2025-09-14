import { features5 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section box-makeyourtrip-home8">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">
            Make Your Trip Your Way With Us
          </h2>
        </div>
        <div className="row mt-60 cardIconTitleDescLeft">
          {features5.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="cardIconTitleDesc wow fadeInUp">
                <div className="cardIcon">
                  <Image width={56} height={56} src={elm.src} alt="luxride" />
                </div>
                <div className="cardTitle">
                  <h5 className="text-20-medium color-text">{elm.title}</h5>
                </div>
                <div className="cardDesc">
                  <p className="text-16 color-text">{elm.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
