import React, { useEffect, useRef } from 'react';
import './HomeAbout.scss';

const HomeAbout = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left Side - Image */}
          <div className="about-image" ref={imageRef}>
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Ferro Tube Manufacturing Facility" 
                className="main-image"
              />
              <div className="image-overlay"></div>
              <div className="floating-badge">
                <span>Since 1989</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content" ref={contentRef}>
            <div className="content-wrapper">
              <h2 className="welcome-heading">
                Welcome to <span className="highlight">Ferro Tube</span>
              </h2>
              <div className="description">
                <p>
                  Founded in 1989, Ferro Tube specializes in engineering, designing and manufacturing
                  of superior quality products for bulk handling of liquids and chemicals.
                </p>
                <p>
                  The company manufactures the whole range of Pipe Fittings, Drain system for Floating
                  Roof Tanks and Loading Arms for Tank Trucks & Rail cars. Loading arms are capable to
                  handle all petroleum products, edible oil & food products, most of the hazardous acids
                  & chemicals and also liquefied gases.
                </p>
                <p>
                  Further, the company provides all technical assistance to their customers in selecting
                  and designing the best suited (a) Loading arms for their loading installations and
                  (b) Drain system for their Floating Roof Tanks.
                </p>
                <p>
                  Today, the company is most preferred manufacturer and supplier of above products,
                  not only in Indian domestic market but also in international markets. Ferro Tube's
                  loading arms have several unique features, such as high flexibility, smoothness in
                  operation, lighter in weight, long maintenance free life and maneuverability.
                </p>
                <p className="closing-text">
                  At Ferro Tube, we always aim to provide quality products at a reasonable price and in
                  minimum delivery period.
                </p>
              </div>
              
             

              <button className="cta-button">
                Learn More About Us
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;