import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Breadcumb from "@/components/service/Breadcumb";
import Services2 from "@/components/service/Services2";

export const metadata = {
  title:
    "Service Grid 2 || Bone Travel Services",
  description:
    "Bone Travel Services",
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Breadcumb />
        <Services2 />
      </main>
      <Footer1 />
    </>
  );
}
