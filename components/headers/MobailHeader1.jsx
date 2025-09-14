"use client";
import { useEffect } from "react";
import MobileNav from "./components/MobileNav";

export default function MobailHeader1() {
  useEffect(() => {
    const navbarTrigger = document.getElementsByClassName("burger-icon")[0];
    const container = document.getElementsByClassName(
      "mobile-header-active"
    )[0];
    const wrapper4 = document.body;

    const handleClick = (e) => {
      console.log("first");

      navbarTrigger?.classList.toggle("burger-close");
      e.preventDefault();
      container?.classList.toggle("sidebar-visible");
      wrapper4.classList.toggle("mobile-menu-active");
    };

    navbarTrigger?.addEventListener("click", handleClick);

    return () => {
      navbarTrigger?.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="perfect-scroll">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav className="mt-15">
                <ul className="mobile-menu font-heading">
                  <MobileNav />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
