import { features2 } from "@/data/features";
import Image from "next/image";

export default function Features3() {
  return (
    <section className="section box-comfortable-home9 mt-120">
      <div className="box-comfortable-home9-inner bg-4">
        <div className="container-sub">
          <div className="text-center">
            <h2 className="heading-44-medium color-text wow fadeInUp">
              We make sure that your every
              <br className="d-none d-lg-block" />
              trip is comfortable
            </h2>
          </div>
          <div className="row mt-50">
            {features2.map((elm, i) => (
              <div key={i} className="col-lg-6 col-sm-6">
                <div className="cardImageLeftTextRight wow fadeInUp">
                  <div className="cardImage">
                    <Image
                      width={70}
                      height={70}
                      src={elm.image}
                      alt="luxride"
                    />
                  </div>
                  <div className="cardInfo">
                    <h5 className="text-20-medium color-text">{elm.text}</h5>
                    <p className="text-14 color-text">{elm.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
