import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1>Empower Your Digital Presence</h1>
          <p>
            Build, grow, and scale your business with modern tools and creative
            strategy. Your success journey begins here.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>

        <div className="hero__image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero banner"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
