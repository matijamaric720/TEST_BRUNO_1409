import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Blogs from "@/components/homes/common/blogs/Blogs";
import Cities from "@/components/homes/home-3/Cities";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";
import Features from "@/components/common/features/Features2";
import Feet from "@/components/homes/home-3/Feet";
import Hero from "@/components/homes/home-3/Hero";
import Partners from "@/components/homes/home-3/Partners";
import Proces2 from "@/components/homes/home-3/Proces2";
import Process from "@/components/homes/home-3/Process";
import Service from "@/components/homes/home-3/Service";
import Testimonials from "@/components/homes/home-3/Testimonials";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title:
    "Home 3 || Bone Travel Services",
  description:
    "Bone Travel Services",
};

export default function page() {
  return (
    <>
      <Header3 /> <MobailHeader1 />
      <main className="main">
        <Hero />
        <Partners />
        <Process />
        <Feet />
        <Proces2 />
        <Service />
        <Features />
        <Testimonials />
        <Cities />
        <Blogs />
        <DownloadApp />
      </main>
      <Footer3 />
    </>
  );
}
