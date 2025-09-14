import { features3 } from "@/data/features";
import Image from "next/image";

export default function Features2() {
  
  return (
    <section className="section box-reliability-home10">
      <div className="container-sub">
        <div className="box-info-reliability">
          <h2 className="heading-44-medium color-warning mb-30 wow fadeInUp">
            About us
          </h2>
            {features3.map((elm, i) => (
              <p key={i} className="color-white">{elm}</p>
            ))}
        </div>

      {/* Background Image */}
      <div
        className="position-absolute d-none d-lg-block"
        style={{
          zIndex: -1,
          right: "20%",
          bottom: "75vh",
        }}
      >
        <Image
          height={512}
          width={812}
          src="/assets/imgs/page/homepage10/img-reliability.png"
          alt="Background"
          className="opacity-50 img-fluid"
        />
      </div>
    </div>
    </section>
  );
}
