import { features5 } from "@/data/features";
import Image from "next/image";

export default function Features2() {
  return (
    <section className="section mt-90 bg-4 bg-your-trip">
      <div className="container-sub">
        <div className="box-the-trip">
          <h3 className="heading-44-medium mb-60 wow fadeInUp">
            B2B Pricing
          </h3>
          <ul className="list-the-trip wow fadeInUp">
            {features5.map((elm, i) => (
              <li key={i}>
                <div className="cardImage">
                  <Image width={56} height={56} src={elm.src} alt="luxride" />
                </div>
                <div className="cardInfo">
                  <h6 className="text-20-medium color-text">{elm.title}</h6>
                  <p className="text-16 color-text">{elm.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box-the-trip-right wow fadeInUp"></div>
    </section>
  );
}
