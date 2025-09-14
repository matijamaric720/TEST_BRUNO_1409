import { process2 } from "@/data/process";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">How It Works</h2>
        </div>
        <div className="box-list-how mt-90">
          <ul>
            {process2.map((elm, i) => (
              <li
                key={i}
                className={`${
                  process2.length != i + 1 ? "has-arrow" : ""
                } wow fadeInUp`}
              >
                <div className="cardWork">
                  <div className="cardImage">
                    <Image
                      width={70}
                      height={70}
                      src={elm.image}
                      alt="luxride"
                    />
                  </div>
                  <div className="cardTitle">
                    <h5 className="text-20-medium color-text">{elm.title}</h5>
                  </div>
                  <div className="cardDesc">
                    <p className="color-text text-16">{elm.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
