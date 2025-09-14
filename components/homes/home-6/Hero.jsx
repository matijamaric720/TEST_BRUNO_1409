import PlacePicker from "@/components/common/PlacePicker";
import { partners } from "@/data/partners";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section banner-homepage6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="box-banner-homepage6-left">
              <div className="p text-16 color-text mb-5 wow fadeInUp">
                Where Would You Like To Go?
              </div>
              <h1 className="heading-52-medium color-text mb-30 wow fadeInUp">
                Find Your Private <br className="d-none d-lg-block" />
                Chauffeur
              </h1>
              <div className="box-search-ride box-search-ride-3 wow fadeInUp">
                <div className="search-item search-from">
                  <div className="search-icon">
                    <span className="item-icon icon-from"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">From</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-to">
                  <div className="search-icon">
                    <span className="item-icon icon-to"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">To</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-button">
                  <button className="btn btn-search" type="submit">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/imgs/template/icons/search.svg"
                      alt="luxride"
                    />
                    Search
                  </button>
                </div>
              </div>
              <div className="row align-items-center mt-100 wow fadeInUp">
                <div className="col-lg-12 mb-30">
                  <h6 className="text-16-medium color-primary">
                    The partners who sell our products
                  </h6>
                </div>
                <div className="col-lg-12 mb-30">
                  <ul className="list-logos flex-wrap align-item-center justify-content-between ">
                    {partners.map((elm, i) => (
                      <li key={i} className="pr-0">
                        <Image
                          width={130}
                          height={27}
                          style={{
                            width: "130px",
                            height: "27",
                            objectFit: "contain",
                          }}
                          src={elm.url}
                          alt="Luxride"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="box-banner-homepage6-right wow fadeInUp">
              <Image
                width="634"
                height="578"
                src="/assets/imgs/page/homepage6/banner.svg"
                style={{ height: "fit-content" }}
                alt="luxride"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
