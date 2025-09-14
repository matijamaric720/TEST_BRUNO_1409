import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Breadcumb from "@/components/otherPages/pricing/Breadcumb";
import Pricing from "@/components/otherPages/pricing/Pricing";
import React from "react";

export const metadata = {
  title:
    "Pricing || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Breadcumb />
        <Pricing />
      </main>
      <Footer1 />
    </>
  );
}
