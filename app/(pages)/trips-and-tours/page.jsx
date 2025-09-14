import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Breadcumb from "@/components/otherPages/about/Breadcumb-T";
import Features1 from "@/components/service/serviceSingle/Features1";
import Features2 from "@/components/service/serviceSingle/Features2";
import SearchBox from "@/components/service/serviceSingle/SearchBox";
import SearchBox2 from "@/components/service/serviceSingle/SearchBox2";
import Script from "next/script";
import React from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyCP5CQEaW-KFtwaCMSt8oO_uYTIYP7kvOs";

export default function page({ params }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
      />
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Breadcumb />
        <SearchBox2 />
        <Features1 />
        <Features2 />
      </main>
      <Footer1 />
    </>
  );
}
