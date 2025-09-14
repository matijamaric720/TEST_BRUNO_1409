import { features } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section mt-110">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium color-text wow fadeInUp">
            B2B Pricing
          </h2>
        </div>
        <div className="row mt-50 cardIconStyleCircle">
          {features.map((elm, i) => (
            <div key={i} className="col-lg-4">
              <div className="cardIconTitleDesc wow fadeInUp">
                <div className="cardIcon">
                  <Image width={48} height={48} src={elm.icon} alt="luxride" />
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
