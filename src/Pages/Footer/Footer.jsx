// File: src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import logo from "../../assets/logo/ferrologo.jpg" 
import logo from "../../assets/logo/newlogo.png"
import mobilelogo from "../../assets/logo/mobilefooter.png"

const Footer = () => {
  console.log("Footer: mounted/rendered");

  return (
    <footer className="footer">

      <div
        className="footer__bg-logo-mobile"
        style={{
          display: 'none', // Hidden by default, shown only in mobile
        }}
      />

      <div className="footer__container">
        {/* LEFT: info - UNCHANGED */}
        <div className="footer__left">
          {/* <div className="footer__person">
            <h3 className="footer__name">Mr. Kishan Snehi</h3>
            <div className="footer__role">Managing Director</div>
          </div> */}

          <ul className="footer__contacts">
            <li>
              <FiPhone className="footer__icon" />
              <a href="tel:+919898485638">+91 9898485638</a>
            </li>

            <li>
              <FiMail className="footer__icon" />
              <a href="mailto:md@ferrotubeindia.com">md@ferrotubeindia.com</a>
            </li>

            <li>
              <FiMail className="footer__icon" />
              <a href="mailto:ferrotubeind@gmail.com">ferrotubeind@gmail.com</a>
            </li>

            <li className="address-item">
              <FiMapPin className="footer__icon" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=547+GIDC+Waghodia+Vadodara+Gujarat+391760+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                FERRO TUBE & FORGE INDUSTRIES<br />
                547, GIDC Waghodia, Vadodara, Gujarat 391760
              </a>
            </li>

          </ul>
        </div>

        {/* MIDDLE: pages - UNCHANGED */}
        <nav className="footer__middle" aria-label="footer links">
          <div className="footer__links-grid">
            {/* Row 1: Main Pages */}
            <div className="footer__link-row">
              <div className="footer__link-item">
                <a href="/">HOME</a>
              </div>
              <div className="footer__link-item">
                <a href="/about">ABOUT US</a>
              </div>
              <div className="footer__link-item">
                <a href="/capabilities">CAPABILITIES</a>
              </div>
              <div className="footer__link-item">
                <a href="/contact">INQUIRY FORM</a>
              </div>
              <div className="footer__link-item">
                <a href="/contact">OUR PRODUCTS</a>
              </div>
            </div>

            {/* Row 2: Our Products Heading */}
            <div className="footer__link-row">
               <div className="footer__divider"></div>
              
            </div>

            {/* Row 3: Product Links 1 - Equal width */}
            <div className="footer__link-row">
              <div className="footer__link-item">
                <a href="/products/pipe-fitting">Bottom Loading Arms</a>
              </div>
              <div className="footer__link-item">
                <a href="/products/floating-roof-drains">Floating Roof Drains</a>
              </div>
              <div className="footer__link-item">
                <a href="/products/top-loading-arms">Top Loading Arms</a>
              </div>
            </div>

            {/* Row 4: Product Links 2 - Equal width */}
            <div className="footer__link-row">
              <div className="footer__link-item">
                <a href="/products/bottom-loading-arms">Pipe Fittings</a>
              </div>
              <div className="footer__link-item">
                <a href="/products/lpg-loading-arms">Lpg Loading Arms</a>
              </div>
              <div className="footer__link-item">
                <a href="/products/swivel-joints">Swivel Joints</a>
              </div>
            </div>

            {/* Row 5: Accessories */}
            <div className="footer__link-row">
              <div className="footer__link-item ">
                <a href="/products/accessories">Accessories</a>
              </div>
            </div>
          </div>
        </nav>

        {/* RIGHT: logo with diagonal divider - UNCHANGED */}
        <div className="footer__right" aria-hidden="false">
          <div className="footer__logo">
            <img
              src={logo}
              alt="company logo"
              className="desktop-logo"
            />
            <img
              src={logo}
              alt="company logo"
              className="mobile-logo"
            />
          </div>
        </div>
      </div>

      {/* ADDED DEVELOPER CREDIT AT BOTTOM CENTER OF ENTIRE FOOTER */}
      <div className="footer__bottom-credit">
        Designed And Developed By{" "}
        <a
          href="https://techorses.com"       // <-- replace with your actual site link
          target="_blank"
          rel="noopener noreferrer"
          className="footer__credit-link"
        >
          TECHORSES
        </a>!
      </div>


      <div className="mobile-bg-logo-new"></div>

      <div
        className="mobile-bg-logo"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${mobilelogo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '180px auto',
          opacity: 0.15,
          zIndex: 1,
          pointerEvents: 'none',
          display: 'none' // Hidden by default
        }}
      />

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 720px) {
          .mobile-bg-logo {
            display: block !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;