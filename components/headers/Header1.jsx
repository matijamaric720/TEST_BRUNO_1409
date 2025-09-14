"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";

import Link from "next/link";
import Language from "./components/Language";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header sticky-bar ${scrolled ? "stick" : ""}`}>
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <Image
                  width={150}
                  height={19}
                  alt="luxride"
                  src="/assets/imgs/template/logo.svg"
                  style={{ height: "fit-content" }}
                />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <Nav />
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
