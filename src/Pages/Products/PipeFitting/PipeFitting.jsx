import React, { useState, useEffect } from "react";
import './PipeFitting.scss';

const PipeFitting = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paragraphs = [
    "Ferro Tube manufactures a wide range of Pipe Fittings since 1989 which are well accepted by all major domestic Refineries, Petrochemicals, Fertilizers, Chemical and other process industries.",
    
    "Manufacturing, welding and testing is performed in accordance with latest ASTM, ASME, MSS SP-43 and MSS SP-49 codes. The company also undertakes all types of additional material tests that may be needed to meet the specialized requirements of a variety of service conditions",
    
    "The fittings are manufactured up to 42” sizes, both in seamless and welded construction. Welded fittings are 100% tested by radiographic test.",
    
    "Quality assurance system is approved by most of the major national and international Engineering Consultants and Third Party Inspection agencies, such as Lloyds, BV, DNV, TUV etc",
    
    "The materials of construction includes carbon steel, stainless steel, low temperature carbon steel, alloy steel, NACE or other materials as required by the customers.",
    
    "The type of fittings includes Elbows, Special radius bends, Reducers, Tees, Caps, Stub Ends, Jacketed fittings, Sockolets, Weldolets and other various types of socket weld fittings"
  ];

  const images = [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <div className="pipe-fitting">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Pipe Fittings"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">PIPE FITTING</h1>
          {/* <p className="hero-subtitle">Manufacturing Excellence Since 1989</p>  */}
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-column">
              {paragraphs.slice(0, 3).map((paragraph, index) => (
                <p key={index} className="paragraph-text">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="content-column">
              {paragraphs.slice(3, 6).map((paragraph, index) => (
                <p key={index + 3} className="paragraph-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`Pipe Fitting ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PipeFitting;