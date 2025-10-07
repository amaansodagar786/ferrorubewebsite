// File: src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  console.log("Footer: mounted/rendered");
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* LEFT: info */}
        <div className="footer__left">
          <div className="footer__person">
            <h3 className="footer__name">Mr. G. K. Majumder</h3>
            <div className="footer__role">Chief Executive</div>
          </div>

          <ul className="footer__contacts">
            <li>
              <FiPhone className="footer__icon" />
              <a href="tel:+919879611705">+91 98796 11705</a>
            </li>

            <li>
              <FiMail className="footer__icon" />
              <a href="mailto:ferrotube@yahoo.in">ferrotube@yahoo.in</a>
            </li>

            <li>
              <FiMail className="footer__icon" />
              <a href="mailto:ferrotubeindia@yahoo.in">ferrotubeindia@yahoo.in</a>
            </li>

            <li>
              <FiMapPin className="footer__icon" />
              <span>
                C1/219, GIDC Estate, Vaghdodia, Vadodara - 391760 Gujarat
                (India)
              </span>
            </li>
          </ul>
        </div>

        {/* MIDDLE: pages */}
        <nav className="footer__middle" aria-label="footer links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CAPABILITIES</a></li>
            <li><a href="#">INQUIRY FORM</a></li>
            <li><a href="#">OUR PRODUCTS</a></li>
          </ul>
        </nav>

        {/* RIGHT: logo with diagonal divider */}
        <div className="footer__right" aria-hidden="false">
          <div className="footer__logo">
            {/* Use /logo.png (public folder) or replace with an import */}
            <img src="/logo.png" alt="company logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
