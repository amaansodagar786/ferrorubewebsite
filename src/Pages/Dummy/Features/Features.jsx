import React from "react";
import "./Features.scss";

const Features = () => {
  const features = [
    {
      title: "Fast Performance",
      text: "Optimized for speed and reliability across all devices.",
      icon: "⚡",
    },
    {
      title: "Secure Data",
      text: "Your privacy and security are our top priorities.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      text: "We’re here to help, anytime you need assistance.",
      icon: "💬",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Our Key Features</h2>
        <div className="features__grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
