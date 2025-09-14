import Image from "next/image";

export default function Banner() {
  return (
    <div className="section wow fadeInUp">
      <Image
        width={1920}
        height={550}
        style={{ height: "fit-content" }}
        src="/assets/imgs/page/about/banner.png"
        alt="luxride"
      />
    </div>
  );
}
