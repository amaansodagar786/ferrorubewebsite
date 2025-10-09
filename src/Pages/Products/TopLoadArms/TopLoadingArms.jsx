import React from "react";
import "./TopLoadingArms.scss";

/**
 * Replace leftImg and rightImg with your actual imports if you have local assets:
 * import leftImg from "./assets/short-reach-left.png";
 * import rightImg from "./assets/short-reach-right.png";
 */
const leftImg =
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const rightImg = leftImg;

const thumbA =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60";
const thumbB =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60";
const bigA =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60";
const bigB =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60";


const TopLoadingArms = () => {
  return (
    <div className="top-loading-arms">
      {/* HERO */}
      <section className="floating-hero">
        <div className="floating-hero-background">
          <img
            className="floating-hero-img"
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Top Loading Arms"
          />
          <div className="floating-hero-overlay" />
        </div>

        <div className="floating-hero-content">
          <h1 className="floating-hero-title">Top Loading Arms</h1>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="short-reach-section">
        <div className="container">
          <h2 className="section-title">Short reach loader / scissor arm</h2>

          {/* ROW 1: left = 2 list items, right = image */}
          <div className="row">
            <div className="text-block">
              <h3 className="subtitle">This model offers:</h3>
              <ul className="offer-list">
                <li>
                  Double arm configuration with drop tube. Versatile top loader.
                </li>
                <li>
                  The second arm i.e. outboard arm rotates 360° in the
                  horizontal plane, providing a spotting allowance up to twice
                  its length.
                </li>
              </ul>
            </div>

            <div className="image-block image-right">
              <div className="shape shape-right" />
              <div className="card">
                <img src={rightImg} alt="short reach right" />
              </div>
            </div>
          </div>

          {/* ROW 2: left = image, right = remaining 3 list items */}
          <div className="row reverse">
            <div className="image-block image-left">
              <div className="shape shape-left" />
              <div className="card">
                <img src={leftImg} alt="short reach left" />
              </div>
            </div>

            <div className="text-block">
              <ul className="offer-list">
                <li>
                  4 nos. of swivel joints provide high flexibility. Very quick
                  in reaching the furthest filling nozzle and provides superior
                  handling comfort.
                </li>
                <li>
                  Can withstand rough usage in Tank Truck / Rail Car loading
                  operations.
                </li>
                <li>Dependable and low-maintenance service.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="supported-long-reach">
        <div className="slr-container">
          <h2 className="slr-title">Supported long reach loader</h2>

          {/* TOP ROW */}
          <div className="slr-row slr-row-top">
            <div className="slr-col slr-col-left">
              <h3 className="slr-small-title">This model offers:</h3>
              <ul className="slr-list compact">
                <li>
                  Most popular and versatile of all top loaders, recommended for
                  high usage installations.
                </li>
                <li>
                  Can be supplied with or without Stand Post. Stand Post supported
                  models are easy to install and do not require any additional
                  platform support.
                </li>
                <li>
                  Highly flexible, very quick in reaching the furthest filling
                  nozzles and provides superior handling comfort to the operators.
                </li>
                <li>
                  4 nos. of swivel joints and long outboard arm provides maximum
                  flexibility for mis-spotting and longer reaches.
                </li>
              </ul>
            </div>

            <div className="slr-col slr-col-right">
              <div className="thumb-stack">
                <figure className="thumb thumb-top">
                  <div className="thumb-shape" />
                  <img src={thumbA} alt="thumb A" />
                </figure>

                <figure className="thumb thumb-bottom">
                  <div className="thumb-shape" />
                  <img src={thumbB} alt="thumb B" />
                </figure>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="slr-row slr-row-bottom">
            <div className="slr-col slr-col-left-image">
              <div className="bottom-image-group">
                <div className="bottom-shape" />

                {/* left big card */}
                <figure className="big-thumb big-thumb-left">
                  <div className="big-thumb-bg" />
                  <img src={bigA} alt="big left" />
                </figure>

                {/* right big card (overlaps to the right) */}
                <figure className="big-thumb big-thumb-right">
                  <div className="big-thumb-bg" />
                  <img src={bigB} alt="big right" />
                </figure>
              </div>
            </div>

            <div className="slr-col slr-col-right-list">
              <ul className="slr-list">
                <li>
                  4 nos. of swivel joints and long outboard arm provides maximum
                  flexibility for mis-spotting and longer reaches from the loading
                  platform to the Tank Truck.
                </li>
                <li>
                  Heavy loads caused due to bending moment and operational
                  stresses which falls on swivel components, is counter balanced
                  by the boom mounted design. Hence, swivel components are free
                  from loads, so wear is minimized.
                </li>
                <li>
                  A wide range of additional components can easily be incorporated
                  due to boom mounted design.
                </li>
                <li>Dependable and low maintenance service.</li>
                <li>
                  Both the boom and the arm can be folded back alongside the
                  platform for convenient, compact storage away from the traffic
                  flow.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="unsupported-loader">
        <h2 className="unsupported-loader-title">Unsupported long reach loader</h2>

        <div className="unsupported-loader-content">
          {/* LEFT - TEXT */}
          <div className="loader-text">
            <h3>Advantages of this model are:</h3>
            <ul>
              <li>
                Recommended where platform support cannot be provided due to
                platform limitations.
              </li>
              <li>
                Specially designed heavy duty swivel joint is provided at
                inlet/base in order to counterbalance the heavy loads due to
                bending moment and operational stresses.
              </li>
              <li>
                Offers the same advantages as Supported long reach loader.
              </li>
              <li>
                Our standard design incorporates Compression type spring unit for
                this model. An additional cylindrical box is mounted at the back of
                the spring housing for spring’s tension adjustment. A simple turn of
                adjusting bolt (located at the top of cylindrical box) can easily
                and safely adjust the tension of the spring — without even touching
                the spring assembly.
              </li>
            </ul>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="loader-image">
            <div className="image-bg"></div>
            <img src={thumbA} alt="Unsupported long reach loader" />
          </div>
        </div>
      </section>


      <section className="loading-arm-special">
        <h2 className="loading-arm-title">Loading arm for special application</h2>

        <div class in="loading-arm-text">
          <p>
            Ferro Tube provides all technical assistance to their customers for
            design, manufacture and supply of loading arms for their special
            applications.
          </p>
          <p>
            The above loading arm fitted with overspill protection system, is
            designed for loading highly hazardous and corrosive chemicals, namely
            diluted hydrochloric acid which is chemically non-resistant to carbon
            steel and stainless steel materials. The liquid flow passage of this
            model consists of inexpensive plastic pipes, fittings, hatch cover and
            flexible hoses. The metallic parts (rubber coated carbon steel) of
            this model are actually the carrying mechanism for plastic flow
            passage. However, the model offers all advantages of a conventional
            top loader, such as ease in handling and long maintenance free life.
          </p>
          <p>
            Specially designed and manufactured for unloading highly hazardous and
            explosive chemical namely Concentrated Nitric acid (98%) from Tank
            Trucks. Flow passage here is constructed of pure aluminum materials
            (99.6%) of Gr. 1060 Temper-O. Supporting structure is made of SS
            materials.
          </p>
        </div>

        <div className="loading-arm-images">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>

          <div className="image-wrapper">
            <img src={thumbB} alt="Loading arm special application 1" />
          </div>
          <div className="image-wrapper">
            <img src={thumbB} alt="Loading arm special application 2" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default TopLoadingArms;
