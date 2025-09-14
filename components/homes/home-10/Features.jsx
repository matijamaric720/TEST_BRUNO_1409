import { features6 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section mt-120">
      <div className="container-sub">
        <div className="row mt-60 cardIconTitleDescLeftStyle2 mx-auto">
          {features6.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <div className="cardIconTitleDesc wow fadeInUp">
                <div className="cardIcon">
                  <Image
                    width={64}
                    height={56}
                    src={elm.iconSrc}
                    alt="luxride"
                  />
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
