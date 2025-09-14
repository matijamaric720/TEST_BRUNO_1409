"use client";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";
import "../public/assets/scss/style.scss";

import { register } from "swiper/element/bundle";
import { usePathname } from "next/navigation";
const DM_SansFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--dm-saans-font",
});
register();
export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then((module) => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  const path = usePathname();
  // let wow = null;
  // useEffect(() => {
  //   const { WOW } = require("wowjs");
  //   wow = new WOW({
  //     live: false,
  //     mobile: false,
  //   });
  //   wow.init();
  // }, [path]);

  return (
    <html lang="en">
      <head></head>
      <body className={DM_SansFont.variable}>{children}</body>
    </html>
  );
}
