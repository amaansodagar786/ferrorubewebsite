// File: src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../../assets/logo/ferrologo.jpg"
import mobilelogologo from "../../assets/logo/footermobilelogo.png"

const Footer = () => {
  console.log("Footer: mounted/rendered");
  
  // Product pages data
  const productPages = [
    { title: "Pipe Fittings", link: "/products/pipe-fitting" },
    { title: "Floating Roof Drains", link: "/products/floating-roof-drains" },
    { title: "Top Loading Arms", link: "/products/top-loading-arms" },
    { title: "Bottom Loading Arms", link: "/products/bottom-loading-arms" },
    { title: "LPG Loading Arms", link: "/products/lpg-loading-arms" },
    { title: "Swivel Joints", link: "/products/swivel-joints" },
    { title: "Accessories", link: "/products/accessories" },
  ];

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

            <li className="address-item">
              <FiMapPin className="footer__icon" />
              <a
                href="https://www.google.com/maps/place/C1%2F219,+GIDC+Estate,+Vaghdodia,+Vadodara+-+391760+Gujarat+(India)"
                target="_blank"
                rel="noopener noreferrer"
              >
                C1/219, GIDC Estate, Vaghdodia,<br />
                Vadodara - 391760 Gujarat (India)
              </a>
            </li>
          </ul>
        </div>

        {/* NEW: Products column */}
        <div className="footer__products">
          {/* <h4 className="footer__products-title">Our Products</h4>  */}
          <ul className="footer__products-links">
            {productPages.map((product) => (
              <li key={product.link}>
                <a href={product.link}>{product.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* MIDDLE: pages */}
        <nav className="footer__middle" aria-label="footer links">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/capabilities">CAPABILITIES</a></li>
            <li><a href="/contact">INQUIRY FORM</a></li>
            <li><a href="/products">OUR PRODUCTS</a></li>
          </ul>
        </nav>

        {/* RIGHT: logo with diagonal divider */}
        <div className="footer__right" aria-hidden="false">
          <div className="footer__logo">
            <img src={logo} alt="company logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;