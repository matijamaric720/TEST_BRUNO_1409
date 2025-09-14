import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="section bg-primary pt-80 pb-50">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-30">
            <h2 className="heading-44-medium color-white mb-20 wow fadeInUp">
              Chauffeurs at your fingertips
            </h2>
            <p className="text-16 color-white wow fadeInUp">
              Easily book, change, or cancel rides on the go. Think of it as
              <br className="d-none d-lg-block" />
              peace of mind in the palm of your hand.
            </p>
          </div>
          <div className="col-lg-5 mb-30 wow fadeInUp">
            <div className="box-button-download box-button-download-white">
              <a
                className="btn btn-download mr-15 hover-up wow fadeInUp"
                href="#"
              >
                <div className="inner-download">
                  <div className="icon-download">
                    <Image
                      width={19}
                      height={23}
                      src="/assets/imgs/template/icons/apple-icon-black.svg"
                      alt="luxride"
                    />
                  </div>
                  <div className="info-download">
                    <span className="text-download-top">Download on the</span>
                    <span className="text-14-medium">Apple Store</span>
                  </div>
                </div>
              </a>
              <a className="btn btn-download hover-up wow fadeInUp" href="#">
                <div className="inner-download">
                  <div className="icon-download">
                    <Image
                      width={23}
                      height={26}
                      src="/assets/imgs/template/icons/google-icon-black.svg"
                      alt="luxride"
                    />
                  </div>
                  <div className="info-download">
                    <span className="text-download-top">Download on the</span>
                    <span className="text-14-medium">Apple Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
