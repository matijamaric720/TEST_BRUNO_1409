import { facts } from "@/data/facts";

export default function Facts() {
  return (
    <section className="section mb-30 mt-80 box-showcase">
      <div className="bg-showcase pt-100 pb-70">
        <div className="container-sub">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <h2 className="heading-44-medium color-white wow fadeInUp">
                Showcase some impressive numbers.
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                {facts.map((elm, i) => (
                  <div key={i} className="col-4 mb-30 wow fadeInUp">
                    <div className="box-number">
                      <h2 className="heading-44-medium color-white">
                        {elm.number}
                      </h2>
                      <p className="text-20 color-white">{elm.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
