"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [parentOpen, setParentOpen] = useState(-1);
  return (
    <>
      {menuItems.map((elm, i) => (
        <li key={i} className="has-children">
          <a
            onClick={() => setParentOpen((pre) => (pre == i ? -1 : i))}
            className={`active mobileMenuParent ${
              elm.subMenu.some(
                (elm3) => pathname.split("/")[1] == elm3.link.split("/")[1]
              )
                ? "active-link"
                : ""
            } ${parentOpen == i ? "parent-open" : ""}`}
          >
            <span>{elm.title}</span>
            <span className="menu-expand">
              <svg
                className="w-6 h-6 icon-16"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7911 1.0474C15.5023 0.741097 15.0192 0.729691 14.7145 1.01768L7.99961 7.37897L1.28555 1.01772C0.980773 0.728941 0.498472 0.741128 0.208947 1.04743C-0.080577 1.35296 -0.0676398 1.83526 0.237916 2.12478L7.47618 8.98209C7.62246 9.12077 7.81143 9.19087 7.99961 9.19087C8.18779 9.19087 8.37751 9.12077 8.52382 8.98209L15.7621 2.12478C16.0676 1.83523 16.0806 1.35296 15.7911 1.0474Z"
                  fill="#181A1F"
                ></path>
              </svg>
            </span>
          </a>
          <ul
            className={`sub-menu mobile-sub-menu ${
              parentOpen == i ? "menu-open" : ""
            }`}
          >
            {elm.subMenu.map((elm2, i2) => (
              <li key={i2}>
                <Link
                  className={
                    pathname.split("/")[1] == elm2.link.split("/")[1]
                      ? "active-link"
                      : ""
                  }
                  href={elm2.link}
                >
                  {elm2.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li>
        <Link
          className={`${"/contact" == pathname ? "active-link" : ""}`}
          style={{ fontSize: "20px" }}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
}
