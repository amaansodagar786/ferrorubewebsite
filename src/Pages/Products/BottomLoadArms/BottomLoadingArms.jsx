// File: src/components/BottomArms/BottomArms.jsx
import React, { useEffect } from "react";
import "./BottomArms.scss";

import img1 from "../../../assets/products/bottom-loading/bot_arm_1.jpg"
import img2 from "../../../assets/products/bottom-loading/bot_arm_3.jpg"
import img3 from "../../../assets/products/bottom-loading/bot_arm_3.jpg"


import heroimg from "../../../assets/products/bottom-loading/bottomloadinghero.png";
import mobilehero from "../../../assets/mobileslider/mobilebottom.png" ;


const BottomArms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("[BottomArms] mounted — scrolled to top");
  }, []);

  // Top intro bullets (two columns)
  const topLeft = [
    "Safety to the operators.",
    "Filling is faster and number of compartments can be filled simultaneously.",
    "Vapor can be recovered fully."
  ];
  const topRight = [
    "Connection for filling can be made quickly.",
    "Danger of generating static electricity is less.",
    "Costly loading platform can be eliminated."
  ];

  const springAdvantages = [
    "Versatile and popular among all bottom loading arms.",
    "Most suitable for installations that are being converted from top loading to bottom loading, where loading space is limited.",
    "Long hose is used instead of rigid piping at the secondary arm for more flexibility.",
    "4 nos. of swivel joints along with long hose provides high flexibility and handling comfort.",
    "It makes the connection more quickly so the overall loading time is reduced.",
    "Hoses are lighter in weight with high flexibility. Specially designed, composite-type hoses having multilayer elastomeric material, suitable for 100% aromatics and constructed from layers of polypropylene and polyester films and fabric. Helix wires in both inner and outer surfaces provide rigidity. Both ends of hose are swaged to galvanized carbon steel tail pieces with TTMA flanges.",
    "A wide range of additional components can easily be incorporated due to boom mounted design.",
    "Dependable and low maintenance service."
  ];

  const bottomFeatures = [
    "Designed for both loading and unloading operations.",
    "Self-draining configuration i.e. full qty. of product shall automatically be drained after loading/unloading operation.",
    "Self supported design; do not require any additional support. Can be installed on ground level by simply bolting with foundation bolts.",
    "5 nos. of swivel joints provides high flexibility in both movement and making tight connection with Tanker’s nozzle located at side, bottom or rear end.",
    "The outboard swivel joint and its connecting arm can adjust any changes in elevation of Tanker’s nozzle that may result due to various sizes of vehicle.",
    "Variety of end fittings, such as quick coupling, dry disconnect coupler, union, rotating flange, API coupler etc. can easily be incorporated.",
    "Overall height is less than 40 inch and the connecting pipe can rotate both in horizontal and vertical directions (due to double swivel joints) to make tight connection with bottom side outlet nozzle of rail car.",
    "Dependable and low maintenance service."
  ];

  // Split bottom features so that some appear beside images and the rest appear below (full width).
  const splitIndex = 4; // adjust if you want more/less beside the images
  const featuresBesideImages = bottomFeatures.slice(0, splitIndex);
  const featuresBelow = bottomFeatures.slice(splitIndex);

  return (
    <div className="bottom-arms">
      {/* ===== HERO (unchanged as requested) ===== */}
      <section className="ba-hero">
        <div className="ba-hero__bg">
          <img
            src={heroimg}
            alt="Bottom loading arms hero"
            className="hero-img desktop"
          />
          <img
            src={mobilehero}
            alt="Bottom loading arms hero mobile"
            className="hero-img mobile"
          />
        </div>

        <div className="ba-hero__content">
          <h1 className="ba-hero__title">BOTTOM <br /> LOADING ARMS</h1>
        </div>
      </section>


      {/* ===== TOP INTRO (below hero) - centered and uses 90% width ===== */}
      <section className="ba-topintro">
        <div className="ba-topintro__wrap">
          <p className="ba-topintro__lead">
            Bottom loading arms are increasingly preferred by the Customers as these arms offer
            several Benefits over the Top loading arms, such as:
          </p>

          <div className="ba-topintro__cols">
            <ul className="ba-topintro__list">
              {topLeft.map((t, i) => (
                <li key={`l-${i}`}>{t}</li>
              ))}
            </ul>

            <ul className="ba-topintro__list">
              {topRight.map((t, i) => (
                <li key={`r-${i}`}>{t}</li>
              ))}
            </ul>
          </div>

          <p className="ba-topintro__note">
            Our standard size is 4" with API Coupler as per API RP-1004 which provides flow rate up to 2500 liters per minute. Available other sizes are <br /> 2", 3" and 6" with various end fittings, such as loose flange with stub end, quick coupling, unions or other customer specified end fittings.
          </p>
        </div>
      </section>

      {/* ===== SPRING BALANCED (center the main heading across the section) ===== */}
      <section className="ba-spring">
        <div className="ba-spring__container">
          {/* title is centered across the grid via CSS (spans both columns) */}
          <h2 className="ba-spring__title">Spring balanced bottom hose loader</h2>

          <div className="ba-spring__left">
            <h4 className="ba-spring__lead">Advantages of this model are:</h4>

            <ul className="ba-spring__list">
              {springAdvantages.map((s, i) => (
                <li key={`s-${i}`}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="ba-spring__right">
            <div className="ba-spring__shape" aria-hidden="true" />
            <div className="ba-spring__imgwrap">
              <img
                src={img1}
                alt="Spring balanced loader"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM LOADING / UNLOADING ARM (50-50). images taller; right content transparent.
                Remaining points displayed below images spanning full width. ===== */}
      <section className="ba-features">
        <div className="ba-features__container">
          <h2 className="ba-features__title">Bottom loading / unloading arm</h2>

          <div className="ba-features__grid">
            {/* LEFT — two images side-by-side (taller) */}
            <div className="ba-features__left">
              <div className="ba-img-row">
                <div className="ba-img-card">
                  <div className="ba-img-card__shape" />
                  <img
                    src={img2} alt="arm detail 1"
                  />
                </div>

                <div className="ba-img-card">
                  <div className="ba-img-card__shape" />
                  <img
                    src={img3} alt="arm detail 2"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — features list (no white bg as requested) */}
            <div className="ba-features__right">
              <h4 className="ba-features__lead">Advantages of this model are:</h4>
              <ul className="ba-features__list">
                {featuresBesideImages.map((f, idx) => (
                  <li key={`b-${idx}`}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Remaining features shown below images spanning full width */}
          {featuresBelow.length > 0 && (
            <div className="ba-features__below">
              <ul>
                {featuresBelow.map((f, i) => (
                  <li key={`below-${i}`}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BottomArms;
