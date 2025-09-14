import Link from "next/link";
import React from "react";

export default function BreadCumb2() {
  return (
    <div className="section pt-60 pb-60 bg-primary">
      <div className="container-sub">
        <h1 className="heading-44-medium color-white mb-5">Blog Single</h1>
        <div className="box-breadcrumb">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href={`/blog-single/1`}>Blog Single</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
