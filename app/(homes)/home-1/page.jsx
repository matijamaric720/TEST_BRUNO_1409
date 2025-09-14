export const dynamic = "force-dynamic";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Blogs from "@/components/homes/common/blogs/Blogs2";
import Cta from "@/components/homes/common/cta/Cta";

import Facts from "@/components/common/facts/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/common/features/Features";
import Feet from "@/components/homes/home-1/Feet";
import Hero from "@/components/homes/home-1/Hero";
import Partners from "@/components/common/partners/Partners";
import Process from "@/components/common/process/Process";
import Service from "@/components/homes/home-1/Service";
import Testimonials from "@/components/common/testimonials/Testimonials2";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";
export const metadata = {
  title:
    "Home 1 || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function Home() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <MobailHeader1 />
      <main className="main">
        <Hero /> 
        <Partners />
        <Feet /> //fleet section
        <Process />
        <Features />
        <Facts />
        <Service />
        <Testimonials />
        <Cta />
        <Blogs />
        <Faq />
        <DownloadApp />
      </main>
      <Footer1 />
    </>
  );
}
