"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header7() {
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
    <header
      className={`header header-white sticky-bar header-7 ${
        scrolled ? "stick" : ""
      }`}
    >
      <div className="container-sub">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <Image
                  width={150}
                  height={50}
                  style={{ maxWidth: "150px" }}
                  alt="Ecom"
                  src="/assets/imgs/template/logo-black.svg"
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
            <div className="header-right">
              <div className="box-button-login d-inline-block mr-20 align-middle">
                <Link
                  className="btn btn-link color-text text-14-medium hover-up"
                  href="/login"
                >
                  Log In
                </Link>
              </div>
              <div className="box-button-login d-none2 d-inline-block align-middle">
                <Link
                  className="btn btn-border-black-small hover-up"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
