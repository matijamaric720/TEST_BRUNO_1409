import { features5 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section mt-90 bg-your-trip box-comfortable-home9">
      <div className="bg-4 position-relative">
        <div className="container-sub">
          <div className="box-the-trip">
            <h3 className="heading-44-medium mb-60 wow fadeInUp">
              Make Your Trip Your Way With Us
            </h3>
            <ul className="list-the-trip">
              {features5.map((elm, i) => (
                <li key={i} className="wow fadeInUp">
                  <div className="cardImage">
                    <Image width={50} height={50} src={elm.src} alt="luxride" />
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
        <div className="box-the-trip-right"></div>
      </div>
    </section>
  );
}
