import { education } from "@/data/team";
import React from "react";

export default function Education() {
  return (
    <ul className="list-experiences">
      {education.map((elm, i) => (
        <li key={i}>
          <div className="card-experiences">
            <div className="card-experience-circle">
              <span className="circle-text">{elm.circleText} </span>
            </div>
            <div className="card-experience-info">
              <span className="year">{elm.year}</span>
              <h3 className="text-16-medium mt-10 mb-5">{elm.degree}</h3>
              <h4 className="text-16-medium color-secondary mb-10">
                {elm.institution}
              </h4>
              <p className="text-16 color-text">{elm.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
