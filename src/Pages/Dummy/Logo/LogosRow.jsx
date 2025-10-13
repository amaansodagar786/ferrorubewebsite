import React from "react";
import "./LogosRow.scss";

const LogosRow = () => {
  const logos = [
    "https://via.placeholder.com/100x50",
    "https://via.placeholder.com/100x50",
    "https://via.placeholder.com/100x50",
    "https://via.placeholder.com/100x50",
    "https://via.placeholder.com/100x50",
  ];

  return (
    <section className="logos">
      <div className="container logos__wrapper">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt={`logo-${i}`} />
        ))}
      </div>
    </section>
  );
};

export default LogosRow;
