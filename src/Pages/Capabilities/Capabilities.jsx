import React from "react";
import "./Capabilities.scss";

// Sample hero and section images
const heroImg =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80";
const img1 =
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img2 =
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const Capabilities = () => {
  return (
    <div className="capabilities">
      {/* HERO */}
      <section className="capabilities-hero">
        <img src={heroImg} alt="Capabilities hero" className="hero-img" />
        <div className="hero-center">
          <h1>CAPABILITIES</h1>
        </div>
      </section>

      {/* SECTION 1: LEFT TEXT - RIGHT IMAGE */}
      <section className="capabilities-row">
        <div className="text-col">
          <h2>Quality Assurance</h2>
          <p>
            Ferro Tube is an ISO 9001 qualified company and committed to a
            quality assurance program in every step of administrative and
            manufacturing activities, benchmarked to the highest quality,
            environment and safety standards.
          </p>
          <p>
            Manufacturing, welding and testing on shop floor is performed in
            accordance with the latest ASTM, API and ASME codes and other
            international standards.
          </p>
          <p>
            Available shop floor testing facilities are in conformity with code
            requirements and are approved by national & international Third
            Party Inspection agencies and engineering consultants.
          </p>
        </div>

        <div className="media-col">
          <div className="shape-right" aria-hidden />
          <div className="image-frame">
            <img src={img1} alt="Quality Assurance" />
          </div>
        </div>
      </section>

      {/* SECTION 2: LEFT IMAGE - RIGHT TEXT */}
      <section className="capabilities-row reverse">
        <div className="media-col">
          <div className="shape-left" aria-hidden />
          <div className="image-frame">
            <img src={img2} alt="Manufacturing" />
          </div>
        </div>

        <div className="text-col">
          <h2>Manufacturing</h2>
          <p>
            Ferro Tube has two separate manufacturing plants in the same
            industrial area at Vadodara, Gujarat (India) for their various
            products. Both the plants are fully equipped with latest
            manufacturing and testing facilities.
          </p>
          <p>
            Latest CNC machines are extensively used for accurate machining.
            Swivel Joints, API Couplers, API Adapters and other critical
            components for loading arms are CNC machined to highly close
            tolerances.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
