import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="section mt-120">
      <div className="container-sub">
        <h2 className="heading-44-medium wow fadeInUp">
          Features Of Our Mercedes-Benz E-Class Vehicles
        </h2>
        <div className="row mt-50 cardIconTitleDescLeft">
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={56}
                  height={56}
                  src="/assets/imgs/page/fleet/camera.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">Safety First</h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={56}
                  height={56}
                  src="/assets/imgs/page/fleet/water.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">
                  Prices With No Surprises
                </h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={64}
                  height={64}
                  src="/assets/imgs/page/fleet/coffee.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">
                  Private Travel Solutions
                </h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={56}
                  height={56}
                  src="/assets/imgs/page/fleet/newspaper.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">Safety First</h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={56}
                  height={56}
                  src="/assets/imgs/page/fleet/cooperation.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">
                  Prices With No Surprises
                </h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="cardIconTitleDesc wow fadeInUp">
              <div className="cardIcon">
                <Image
                  width={64}
                  height={64}
                  src="/assets/imgs/page/fleet/rim.svg"
                  alt="luxride"
                />
              </div>
              <div className="cardTitle">
                <h5 className="text-20-medium color-text">
                  Private Travel Solutions
                </h5>
              </div>
              <div className="cardDesc">
                <p className="text-16 color-text">
                  Both you and your shipments will travel with professional
                  drivers. Always with the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
