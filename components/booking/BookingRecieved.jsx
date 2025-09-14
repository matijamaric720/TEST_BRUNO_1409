import Image from "next/image";

const infoData = [
  { id: 1, label: "Order Number", value: "#4039" },
  { id: 2, label: "Date", value: "Thu, Oct 06, 2022" },
  { id: 3, label: "Total", value: "$40.10" },
  { id: 4, label: "Payment Method", value: "Direct Bank Transfer" },
];
const rideData = [
  {
    id: 1,
    topText: "Pick Up Address",
    bottomText: "London City Airport (LCY)",
  },
  {
    id: 2,
    topText: "Drop Off Address",
    bottomText: "London City Airport (LCY)",
  },
  { id: 3, topText: "Pick Up Date", bottomText: "Thu, Oct 06, 2022" },
  { id: 4, topText: "Pick Up Time", bottomText: "6 PM : 15" },
  { id: 5, topText: "Distance", bottomText: "311 km/ 194 miles" },
  { id: 6, topText: "Time", bottomText: "3h 43m" },
];
const personalData = [
  { id: 1, topText: "First name", bottomText: "Ali" },
  { id: 2, topText: "Last name", bottomText: "Tufan" },
  { id: 3, topText: "Email", bottomText: "creativelayers088@gmail.com" },
  { id: 4, topText: "Phone", bottomText: "+09 383 829 91" },
  { id: 5, topText: "Address line 1", bottomText: "" },
  { id: 6, topText: "Address line 2", bottomText: "" },
  { id: 7, topText: "City", bottomText: "London" },
  { id: 8, topText: "State/Province/Region", bottomText: "" },
  { id: 9, topText: "ZIP code/Postal code", bottomText: "95833" },
  { id: 10, topText: "Country", bottomText: "UK" },
  { id: 11, topText: "Special Requirements", bottomText: "" },
];

export default function BookingRecieved() {
  return (
    <section className="section">
      <div className="container-sub">
        <div className="box-completed-booking">
          <div className="text-center wow fadeInUp">
            <Image
              width={80}
              height={80}
              className="mb-20"
              src="/assets/imgs/page/booking/completed.png"
              alt="luxride"
            />
            <h4 className="heading-24-medium color-text mb-10">
              System, your order was submitted successfully!
            </h4>
            <p className="text-14 color-grey mb-40">
              Booking details has been sent to: booking@luxride.com
            </p>
          </div>
          <div className="box-info-book-border wow fadeInUp">
            {infoData.map((elm, i) => (
              <div key={i} className="info-1">
                <span className="color-text text-14">{elm.label}</span>
                <br />
                <span className="color-text text-14-medium">{elm.value}</span>
              </div>
            ))}
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">
              Reservation Information
            </h6>
            <ul className="list-prices">
              {rideData.map((elm, i) => (
                <li key={i}>
                  <span className="text-top">{elm.topText}</span>
                  <span className="text-bottom">{elm.bottomText}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">Selected Car</h6>
            <div className="mt-20 mb-20 text-center">
              <Image
                width={1530}
                height={711}
                style={{ height: "fit-content" }}
                src="/assets/imgs/page/homepage1/e-class.png"
                alt="luxride"
              />
            </div>
            <ul className="list-prices">
              <li>
                <span className="text-top">Class</span>
                <span className="text-bottom">Business Class</span>
              </li>
              <li>
                <span className="text-top">Cars</span>
                <span className="text-bottom">Mercedes-Benz E-Class</span>
              </li>
            </ul>
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">
              Passenger Information
            </h6>
            <ul className="list-prices">
              {personalData.map((elm, i) => (
                <li key={i}>
                  <span className="text-top">{elm.topText}</span>
                  <span className="text-bottom">{elm.bottomText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
