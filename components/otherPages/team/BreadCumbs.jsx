import Link from "next/link";

export default function BreadCumbs() {
  return (
    <div className="section pt-60 pb-60 bg-primary">
      <div className="container-sub">
        <h1 className="heading-44-medium color-white mb-5">Our Team</h1>
        <div className="box-breadcrumb">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/our-team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
