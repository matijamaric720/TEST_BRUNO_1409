import { faqs } from "@/data/faq";

export default function Faq() {
  return (
    <section className="section pt-80 mb-30 bg-faqs">
      <div className="container-sub">
        <div className="box-faqs">
          <div className="text-center">
            <h2 className="color-brand-1 mb-20 wow fadeInUp">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-60 mb-40">
            <div className="accordion wow fadeInUp" id="accordionFAQ">
              {faqs.map((elm, i) => (
                <div key={i} className="accordion-item">
                  <h5 className="accordion-header" id={`heading${i}`}>
                    <button
                      className={`accordion-button text-heading-5 ${
                        i ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                      aria-expanded={`${!i ? "true" : "false"}`}
                      aria-controls={`collapse${i}`}
                    >
                      {elm.question}
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${
                      !i ? "show" : ""
                    }`}
                    id={`collapse${i}`}
                    aria-labelledby={`heading${i}`}
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">{elm.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
