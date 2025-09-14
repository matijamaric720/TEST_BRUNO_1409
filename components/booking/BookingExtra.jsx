"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import Link from "next/link";
const quantityItem = [
  {
    id: 1,
    name: "Child Seat",
    price: 0,
    description:
      "Suitable for toddlers weighing 0-18 kg (approx 0 to 4 years).",
    quantity: 0,
  },
  {
    id: 2,
    name: "Booster seat",
    price: 0,
    description:
      "Suitable for children weighing 15-36 kg (approx 4 to 10 years).",
    quantity: 0,
  },
];
export default function BookingExtra() {
  const [quantityItems, setquantityItems] = useState(quantityItem);
  const handleQuantity = (qty, i) => {
    const items = [...quantityItems];
    const item = items[i];
    if (qty / 1) {
      item.quantity = qty;
      items[i] = item;
      setquantityItems(items);
    }
  };
  useEffect(() => {
    // Focus event
    activeInputFocus();
  }, []);

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Flight/train number
          </h3>
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-label" htmlFor="flight">
                      Extra options
                    </label>
                    <input
                      className="form-control"
                      id="flight"
                      type="text"
                      defaultValue=""
                      placeholder="Example: Booster seat"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="list-extras wow fadeInUp">
            {quantityItems.map((elm, i) => (
              <div key={i} className="item-extra">
                <div className="extra-info">
                  <h5 className="text-20-medium color-text mb-5">
                    {elm.name} <span className="price">${elm.price}</span>
                  </h5>
                  <p className="text-14 color-grey">{elm.description}</p>
                </div>
                <div className="extra-quantity">
                  <span
                    onClick={() => handleQuantity(elm.quantity - 1, i)}
                    className="minus"
                  >
                    {" "}
                  </span>
                  <input
                    className="form-control"
                    onChange={(e) => handleQuantity(e.target.value, i)}
                    type="text"
                    value={elm.quantity}
                  />
                  <span
                    onClick={() => handleQuantity(elm.quantity + 1, i)}
                    className="plus"
                  ></span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-45 wow fadeInUp">
            <div className="form-contact form-comment">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="notes">
                        Notes for the chauffeur
                      </label>
                      <textarea
                        className="form-control"
                        id="notes"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-30 mb-120 wow fadeInUp">
            <Link
              className="btn btn-primary btn-primary-big w-100"
              href="/booking-passenger"
            >
              Continue
              <svg
                className="icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
