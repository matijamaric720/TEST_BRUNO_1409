import { features5 } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section box-make-your-trip bg-2">
      <div className="bg-right-trip"></div>
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="heading-44-medium color-text mb-60 wow fadeInUp">
              Make Your Trip Your Way With Us
            </h3>
            <ul className="list-features-trip">
              {features5.map((elm, i) => (
                <li key={i} className="wow fadeInUp">
                  <div className="feature-left">
                    <Image width={56} height={56} src={elm.src} alt="luxride" />
                  </div>
                  <div className="feature-right">
                    <h6 className="text-20-medium color-text mb-5">
                      {elm.title}
                    </h6>
                    <p className="color-text text-16">{elm.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
