import { features2 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section bg-white pt-120">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <h2 className="heading-44-medium color-text wow fadeInUp">
              We make sure that your every trip is comfortable
            </h2>
          </div>
          <div className="col-lg-6 mb-30">
            <p className="text-16 color-text wow fadeInUp">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla
              suscipit. Maecenas ultrices.
            </p>
          </div>
        </div>
        <div className="row mt-50 justify-content-between">
          {features2.map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <div className="cardImageText wow fadeInUp">
                <div className="cardImage">
                  <Image width={70} height={70} src={elm.image} alt="luxride" />
                </div>
                <div className="cardInfo">
                  <p className="text-20-medium color-text">
                    {elm.text.split(" ").slice(0, 2).join(" ")}{" "}
                    <br className="d-none d-lg-block" />
                    {elm.text.split(" ").slice(2).join(" ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
