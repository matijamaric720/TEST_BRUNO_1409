import { process5 } from "@/data/process";
import Image from "next/image";

export default function Steps() {
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium">How It Works</h2>
        </div>
        <div className="box-list-how box-list-how-2 mt-90">
          <ul>
            {process5.map((elm, i) => (
              <li
                key={i}
                className={`${process5.length != i + 1 ? "has-arrow" : ""}`}
              >
                <div className="cardWork">
                  <div className="cardImage">
                    <Image
                      width={200}
                      height={219}
                      src={elm.imgSrc}
                      alt="luxride"
                    />
                  </div>
                  <div className="cardTitle">
                    <h5 className="text-20-medium color-text">{elm.title}</h5>
                  </div>
                  <div className="cardDesc">
                    <p className="color-text text-16">{elm.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-bottom mt-90"></div>
    </section>
  );
}
