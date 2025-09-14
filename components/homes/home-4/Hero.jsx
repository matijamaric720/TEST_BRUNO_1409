import PlacePicker from "@/components/common/PlacePicker";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section banner-home-4 bg-2 pt-150 pb-160">
      <div className="container-sub">
        <div className="box-banner-homepage-4">
          <p className="text-16 color-text wow fadeInUp">
            Where Would You Like To Go?
          </p>
          <h1 className="heading-52-medium color-text mb-30 wow fadeInUp">
            Your Personal Driver & Chauffeur Service
          </h1>
          <div className="box-search-ride box-search-ride-style-3">
            <div className="box-form-search wow fadeInUp">
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
              <div className="search-item search-button mb-0">
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
          </div>
        </div>
      </div>
    </section>
  );
}
