import Footer1 from "@/components/footers/Footer1";
import Header9 from "@/components/headers/Header9";
import Blogs from "@/components/homes/common/blogs/Blogs";
import Cta from "@/components/homes/common/cta/Cta";
import Facts from "@/components/homes/home-10/Facts";
import Features from "@/components/homes/home-10/Features";
import Features2 from "@/components/homes/home-10/Features2";
import Feet from "@/components/homes/home-10/Feet";
import Hero from "@/components/homes/home-10/Hero";
import Partners from "@/components/homes/home-10/Partners";
import Process from "@/components/homes/home-10/Process";
import Services from "@/components/homes/home-10/Services";
import Testimonials from "@/components/common/testimonials/Testimonials";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Script from "next/script";
export const metadata = {
  title:
    "Home 1",
  description:
    "BONE Travel agencija",
};

const GOOGLE_MAPS_API_KEY = "AIzaSyCP5CQEaW-KFtwaCMSt8oO_uYTIYP7kvOs";



export default function page() {
  return (
    <>
    <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
      />
      <Header9 /> <MobailHeader1 />
      <main className="main">
        <Hero />
        <Features />
        <Feet />
        <Process />
        <Services />
        <Features2 />
      </main>
      <Footer1 />
    </>
  );
}
