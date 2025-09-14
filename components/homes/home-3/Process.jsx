import { process3 } from "@/data/process";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section mt-60">
      <div className="container-sub">
        <div className="row mt-50 cardIconTitleDescLeft">
          {process3.map((elm, i) => (
            <div key={i} className="col-lg-4">
              <div className="cardIconTitleDesc wow fadeInUp">
                <div className="cardIcon">
                  <Image width={56} height={56} src={elm.icon} alt="luxride" />
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
