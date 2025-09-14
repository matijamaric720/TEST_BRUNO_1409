import Link from "next/link";

export default function Banner2() {
  return (
    <section className="section bg-primary banner-about">
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="padding-box">
              <h2 className="heading-44-medium color-white mb-5">About Us</h2>
              <div className="box-breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/service-grid">About</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-60 wow fadeInUp">
                <h2 className="heading-44-medium mb-30 color-white title-fleet">
                  We reimagine the way the world moves for the better
                </h2>
                <div className="content-single">
                  <p className="color-white">
                    We offer luxury chauffeur driven airport transfers and
                    pickups to London. Exceptional Safe, Meet and Greet. One
                    hour of complimentary wait time and flight tracking.
                  </p>
                  <ul className="list-ticks list-ticks-small">
                    <li className="text-16 mb-20 color-white">
                      100% Luxurious Fleet
                    </li>
                    <li className="text-16 mb-20 color-white">
                      A Safe & Secure Journey
                    </li>
                    <li className="text-16 mb-20 color-white">
                      Comfortable And Enjoyable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-banner-right wow fadeInUp"></div>
    </section>
  );
}
