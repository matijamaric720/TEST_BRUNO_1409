import React from "react";

export default function Map() {
  return (
    <div className="wow fadeInUp col-8 mx-auto">
      <iframe
        className="map-contact"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11120.727283665392!2d16.142688!3d45.827642000000004!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ5JzM3LjAiTiAxNsKwMDgnMzIuNiJF!5e0!3m2!1sen!2sus!4v1744805782391!5m2!1sen!2sus"
        style={{ border: "0px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
