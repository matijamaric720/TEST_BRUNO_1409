import React from "react";

export default function BreadCumb2({ teamMember }) {
  return (
    <div className="section pt-60 pb-60 bg-primary">
      <div className="container-sub">
        <h1 className="heading-44-medium color-white mb-5">
          {teamMember.name}
        </h1>
        <div className="box-breadcrumb">
          <p className="text-14 color-white">{teamMember.role}</p>
        </div>
      </div>
    </div>
  );
}
