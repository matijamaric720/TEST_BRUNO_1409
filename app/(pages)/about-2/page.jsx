import DownloadApp from "@/components/common/downloadApp/DownloadApp";
import Partners from "@/components/common/partners/Partners";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Testimonials from "@/components/common/testimonials/Testimonials2";
import Process from "@/components/common/process/Process2";

import Features from "@/components/common/features/Features2";
import Banner2 from "@/components/otherPages/about/Banner2";
import Features2 from "@/components/otherPages/about/Features2";
import Features3 from "@/components/otherPages/about/Features3";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title:
    "About 2 || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Banner2 />
        <Process />
        <Features2 /> <Partners />
        <Features3 />
        <div className="mb-90"></div>
        <Testimonials />
        <Features />
        <DownloadApp />
      </main>
      <Footer1 />
    </>
  );
}
