import { process6 } from "@/data/process";

export default function Process() {
  return (
    <section className="section mt-110">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium color-text wow fadeInUp">
            How It Works
          </h2>
        </div>
        <div className="row mt-60 box-how-it-work">
          {process6.map((elm, i) => (
            <div key={i} className="col-lg-4">
              <div className="cardNumberTitleDesc wow fadeInUp">
                <div className="cardNumber">
                  <span>{elm.number}</span>
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
