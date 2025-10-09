import React, { useEffect } from "react";
import "./LPGLoadingArms.scss";

// Sample hero and section images
const heroImg =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80";
const img1 =
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img2 =
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const LPGLoadingArms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lpg-loading-arms">
      {/* HERO */}
      <section className="lpg-loading-arms-hero">
        <img src={heroImg} alt="LPG Loading Arms hero" className="hero-img" />
        <div className="hero-center">
          <h1>LPG Loading Arms</h1>
        </div>
      </section>

      {/* SECTION 1: LEFT TEXT - RIGHT IMAGE */}
      <section className="lpg-loading-arms-row">
        <div className="text-col">
          <h2>Stand post supported loader</h2>
          <ul>
            <li>Designed for both loading and unloading operations.</li>
            <li>
              Self-draining configuration — full quantity of product
              automatically drains after loading/unloading.
            </li>
            <li>
              Self-supported design; no additional support required. Can be
              installed on ground level using foundation bolts.
            </li>
            <li>
              5 nos. of swivel joints provide high flexibility for movement and
              tight connection with tanker nozzles located at side, bottom, or
              rear.
            </li>
            <li>Trouble-free and long maintenance-free life.</li>
          </ul>
        </div>

        <div className="media-col">
          <div className="shape-right" aria-hidden />
          <div className="image-frame">
            <img src={img1} alt="LPG Loading Arms Features" />
          </div>
        </div>
      </section>

      {/* SECTION 2: LEFT IMAGE - RIGHT TEXT */}
      <section className="lpg-loading-arms-row reverse">
        <div className="media-col">
          <div className="shape-left" aria-hidden />
          <div className="image-frame">
            <img src={img2} alt="LPG Loading Arms Performance" />
          </div>
        </div>

        <div className="text-col">
          <h2>Unsupported a - frame loader</h2>
          <ul>
            <li>This model is capable of long reaches.</li>
            <li>
              Can adjust to elevation or tilting changes of the tanker during
              loading.
            </li>
            <li>Can swing 360° for loading from either side of the riser.</li>
            <li>Safe, quick and efficient loading.</li>
            <li>Parks near vertical position and requires minimum space.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LPGLoadingArms;
