import React from "react";
import "./BigImage.scss";

const BigImage = () => {
  return (
    <section className="bigimage">
      <div className="container">
        <img
          src="https://via.placeholder.com/1000x500"
          alt="Big showcase"
          className="bigimage__img"
        />
      </div>
    </section>
  );
};

export default BigImage;
