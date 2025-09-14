import Invoice from "@/components/Invoice";

export const metadata = {
  title:
    "Invoice || Bone Travel Services",
  description:
    "Bone Travel Services",
};
export default function page() {
  return (
    <>
      <main className="main">
        <Invoice />
      </main>
    </>
  );
}
