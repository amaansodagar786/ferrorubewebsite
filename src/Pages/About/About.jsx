// About.jsx
import React, { useEffect } from "react";
import './About.scss';
import { useNavigate } from "react-router-dom";

import heroimage from "../../assets/home/slider/abouthero.png"
import mobilehero from "../../assets/mobileslider/mobileabout.png"

import video1 from "../../assets/home/about/aboutvideo1.mp4"
import video2 from "../../assets/home/about/aboutvideo2.mp4"
import img1 from "../../assets/home/about/aboutimage.png"

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
    window.scrollTo(0, 0);
  };

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={heroimage} alt="about hero" className="hero-img desktop" />
        <img src={mobilehero} alt="about hero" className="hero-img mobile" />
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
            Petrochemicals, Fertilizers, Power, Gas and Chemical industries
          </p>
          <p>
            In conjunction with customers requirements, field research and in-house R & D, the company subsequently added
            various other premium quality products in their manufacturing range, such as Loading & Unloading Arms, Floating Roof
            Drains etc. which are innovative, reliable & safe and environment friendly. Today, all these products are well proven in
            the field of bulk liquid transfer applications.
          </p>
          <p>
            During the last two decades of business, the company has not only enriched its experience and strengthened its
            manufacturing capabilities but also, developed a dedicated team to maintain its high standard of product quality and
            customer services.
          </p>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="about-media">
        <div className="media-collage">
          <div className="blue-shape-left"></div>
          <img src={img1} alt="Pipeline work" className="media-img img1" />
          {/* Replace img2 with video */}
          <video
            className="media-img img2"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Replace img3 with video */}
          <video
            className="media-img img3"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="blue-shape-right"></div>
        </div>
      </section>
      {/* LEADERS SECTION - UPDATED LAYOUT */}
      <section className="about-leaders">
        <div className="container">
          <h2>Our Leader</h2>
          <div className="leaders-wrapper">

            {/* Leader 1 - Side by side layout */}
            <div className="leader-card-side">
              <div className="leader-image-side">
                <div className="user-icon-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" fill="#1c3d91" />
                    <path d="M12 14C8 14 4 16 4 20H20C20 16 16 14 12 14Z" fill="#1c3d91" />
                  </svg>
                </div>
              </div>
              <div className="leader-content-side">
                <h3>Mr. Kishan Snehi</h3>
                <p>Managing Director</p>
                <p className="leader-description">
                  Managing Director with 8+ years in mechanical industry, previously CEO at Multi Metal Industry. Holds Bachelor's in Electrical Engineering and Master's in CNC Technology.
                </p>
                <button
                  className="know-more"
                  onClick={() => handleRedirect("/about/kishansnehi")}
                >
                  Know More
                </button>
              </div>
            </div>

            {/* Leader 2 - Side by side layout (reversed on desktop) */}
            {/* <div className="leader-card-side reversed">
              <div className="leader-image-side">
                <img src={leader2} alt="Jane Smith" />
              </div>
              <div className="leader-content-side">
                <h3>Jane Smith</h3>
                <p>Chief Operating Officer</p>
                <p className="leader-description">
                  Jane Smith brings extensive operational expertise to our organization, ensuring seamless manufacturing processes and maintaining our high standards.
                </p>
                <button
                  className="know-more"
                  onClick={() => handleRedirect("/about/leader2")}
                >
                  Know More
                </button>
              </div>
            </div> */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;