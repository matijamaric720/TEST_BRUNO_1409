import BreadCumb from "@/components/contact/BreadCumb";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import Offices from "@/components/contact/Offices";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title:
    "Contact || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function page() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <BreadCumb />
        <Offices />
        <ContactForm />
      </main>
      <Footer1 />
    </>
  );
}
