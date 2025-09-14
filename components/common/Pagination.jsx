"use client";

import { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);

  return (
    <ul className="pagination">
      <li className="page-item">
        <a
          className="page-link page-prev cursor-pointer"
          onClick={() => setActivePage((pre) => (pre > 1 ? pre - 1 : pre))}
        >
          <svg
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
        </a>
      </li>
      {[1, 2, 3].map((elm, i) => (
        <li key={i} className="page-item">
          <a
            onClick={() => setActivePage(elm)}
            className={`page-link cursor-pointer ${
              elm == activePage ? "active" : ""
            }`}
          >
            {elm}
          </a>
        </li>
      ))}{" "}
      {activePage > 4 && activePage < 10 && (
        <li className="page-item">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
      )}
      {activePage > 3 && activePage < 10 && (
        <li className="page-item cursor-pointer">
          <a className={`page-link cursor-pointer active`}>{activePage}</a>
        </li>
      )}
      {activePage != 9 && (
        <li className="page-item">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
      )}
      <li
        onClick={() => setActivePage(() => 10)}
        className="page-item cursor-pointer"
      >
        <a
          className={`page-link cursor-pointer ${
            10 == activePage ? "active" : ""
          }`}
        >
          10
        </a>
      </li>
      <li
        className="page-item cursor-pointer"
        onClick={() => setActivePage((pre) => (pre < 10 ? pre + 1 : pre))}
      >
        <a className="page-link page-next">
          <svg
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
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  );
}
