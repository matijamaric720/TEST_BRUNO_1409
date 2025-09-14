import ContactForm2 from "@/components/contact/ContactForm2";
import Map2 from "@/components/contact/Map2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import React from "react";
export const metadata = {
  title:
    "Contact 2 || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function page() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <Map2 />
        <ContactForm2 />
      </main>
      <Footer1 />
    </>
  );
}
