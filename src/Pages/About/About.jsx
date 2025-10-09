
// import heroImg from '../../assets/about/hero.jpg'; // replace with your hero image
// import media1 from '../../assets/about/media1.jpg';
// import media2 from '../../assets/about/media2.jpg';
// import media3 from '../../assets/about/media3.jpg';
// import leader1 from '../../assets/about/leader1.jpg';
// import leader2 from '../../assets/about/leader2.jpg';


// const heroImg = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80" ;
// const media1 = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" ;
// const media2 = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" ;
// const media3 = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" ;
// const leader1 = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" ;
// const leader2 = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" ;

// import React from 'react'; 
import React, { useEffect } from "react";
import './About.scss';
import { useNavigate } from "react-router-dom";

const heroImg = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80";
const media1 = "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const media2 = "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const media3 = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const leader1 = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const leader2 = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();


  const handleRedirect = (path) => {
    navigate(path);
    window.scrollTo(0, 0);  // 👈 Scroll to top after navigating
  };



  return (
    <div className="about-page">

      {/* HERO SECTION */}
      {/* <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>About Us</h1>
      </section> */}

      <section className="about-hero">
        <img src={heroImg} alt="about hero" className="hero-img" />
        <div className="hero-center">
          <h1>About Us</h1>
        </div>
      </section>

      {/* ABOUT INFO SECTION */}
      <section className="about-info">
        <div className="container">
          <p>
            Established in 1989 by two experienced Technocrats with an aim to provide premium quality stainless steel, alloy steel,
            carbon steel and low temperature carbon steel Pipe Fittings for the domestic process industries. The company grown
            rapidly and within a couple of years, its products were well recognized virtually by all domestic Refineries,
            Petrochemicals, Fertilizers, Power, Gas and Chemical industries          </p>
          <p>
            In conjunction with customers requirements, field research and in-house R & D, the company subsequently added
            various other premium quality products in their manufacturing range, such as Loading & Unloading Arms, Floating Roof
            Drains etc. which are innovative, reliable & safe and environment friendly. Today, all these products are well proven in
            the field of bulk liquid transfer applications.          </p>
          <p>
            During the last two decades of business, the company has not only enriched its experience and strengthened its
            manufacturing capabilities but also, developed a dedicated team to maintain its high standard of product quality and
            customer services.          </p>

        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="about-media">
        <div className="media-collage">
          <div className="blue-shape-left"></div>
          <img src={media1} alt="Pipeline work" className="media-img img1" />
          <img src={media2} alt="Worker welding" className="media-img img2" />
          <img src={media3} alt="Industrial machinery" className="media-img img3" />
          <div className="blue-shape-right"></div>
        </div>
      </section>

      {/* LEADERS SECTION */}
      <section className="about-leaders">
        <div className="container">
          <h2>Our Leaders</h2>
          <div className="leaders-wrapper">
            <div className="leader-card">
              <div className="leader-img">
                <img src={leader1} alt="Leader 1" />
              </div>
              <h3>John Doe</h3>
              <p>Chief Executive Officer</p>
              <button
                className="know-more"
                onClick={() => handleRedirect("/about/leader1")}
              >
                Know More
              </button>
            </div>

            <div className="leader-card">
              <div className="leader-img">
                <img src={leader2} alt="Leader 2" />
              </div>
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
              <button
                className="know-more"
                onClick={() => handleRedirect("/about/leader2")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
