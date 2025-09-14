"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const tabs = [
  {
    id: 1,
    href: "/booking-vehicle",
    iconClass: "icon-book icon-vehicle",
    text: "Vehicle",
    number: "01",
  },
  {
    id: 2,
    href: "/booking-passenger",
    iconClass: "icon-book icon-pax",
    text: "Details and payment",
    number: "03",
  },
  {
    id: 3,
    href: "/booking-payment",
    iconClass: "icon-book icon-payment",
    text: "Payment",
    number: "04",
  },
];

export default function BookingTab() {
  const [activePathIndex, setactivePathIndex] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const activeTab = tabs.filter((elm) => elm.href == pathname)[0];
    const activeTabIndex = tabs.indexOf(activeTab);
    setactivePathIndex(activeTabIndex);
  }, [pathname]);

  return (
    <div className="box-booking-tabs">
      {tabs.map((elm, i) => (
        <div key={i} className="item-tab wow fadeInUp">
          <Link href={elm.href}>
            <div
              className={`box-tab-step ${activePathIndex >= i ? "active" : ""}`}
            >
              <div className="icon-tab">
                <span className={elm.iconClass}> </span>
                <span className="text-tab">{elm.text} </span>
              </div>
              <div className="number-tab">
                <span>0{i + 1}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
