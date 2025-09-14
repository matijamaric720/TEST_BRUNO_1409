import NotFound from "@/components/404";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title:
    "Not Found || Bone Travel Services",
  description:
    "Bone Travel Services",
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <NotFound />
      </main>
      <Footer1 />
    </>
  );
}
