import Image from "next/image";
import React from "react";

export default function Invoice() {
  return (
    <section className="section bg-3 box-invoice-block">
      <div className="box-invoice">
        <div className="inner-invoice">
          <div className="d-flex invoice-top">
            <div className="invoice-left">
              <div className="mb-60">
                <Image
                  width={150}
                  height={19}
                  className="mb-65"
                  src="/assets/imgs/page/invoice/logo.png"
                  alt="luxride"
                />
                <p className="text-grey text-14">Invoice date:</p>
                <p className="text-16-medium color-text">22 April 2022</p>
              </div>
              <div className="mb-50">
                <h5 className="text-18-medium color-text mb-15">Supplier</h5>
                <h6 className="text-16-medium color-text mb-5">Realton LLC</h6>
                <p className="color-grey text-14">
                  2301 Ravenswood Rd Madison, WI 53711
                </p>
              </div>
            </div>
            <div className="invoice-right">
              <div className="mb-60">
                <div className="d-flex justify-content-between mb-65">
                  <h3 className="heading-24-medium color-text">Invoice #</h3>
                  <span className="text-16-medium color-text">0043128641</span>
                </div>
                <p className="text-grey text-14">Due date::</p>
                <p className="text-16-medium color-text">22 April 2022</p>
              </div>
              <div className="mb-50">
                <h5 className="text-18-medium color-text mb-15">Customer</h5>
                <h6 className="text-16-medium color-text mb-5">John Doe</h6>
                <p className="color-grey text-14">
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </div>
            </div>
          </div>
          <table className="table table-invoice">
            <thead>
              <tr>
                <th>Description</th>
                <th>Price</th>
                <th>VAT (20%)</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard Plan</td>
                <td>$443.00</td>
                <td>$921.80</td>
                <td>$9243</td>
              </tr>
              <tr>
                <td>Standard Plan</td>
                <td>$443.00</td>
                <td>$921.80</td>
                <td>$9243</td>
              </tr>
              <tr>
                <td>
                  <span className="text-18-medium color-text">Total Due</span>
                </td>
                <td></td>
                <td></td>
                <td>
                  <span className="text-18-medium color-text">$9,750</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bottom-invoice">
            <a href="www.luxride.com">www.luxride.com</a>
            <a href="mailto:invoice@luxride.com">invoice@luxride.com</a>
            <a href="tel:123-123-456">(123) 123-456</a>
          </div>
        </div>
      </div>
    </section>
  );
}
