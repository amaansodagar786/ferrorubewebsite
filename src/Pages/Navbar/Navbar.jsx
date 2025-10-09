import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.scss";
import logoImg from "../../assets/logo/ferrologo.png";

const DEFAULT_MENU = [
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "CAPABILITIES", link: "/capabilities" },
  { title: "OUR PRODUCTS", link: "/products", hasDropdown: true },
  { title: "INQUIRY FORM", link: "/contact" },
];

// Sample product pages - replace with your actual 7 pages
const PRODUCT_PAGES = [
  { title: "Pipe Fittings", link: "/products/pipe-fitting" },
  { title: "Floating Roof Drains", link: "/products/floating-roof-drains" },
  { title: "Top Loading Arms", link: "/products/top-loading-arms" },
  { title: "Bottom Loading Arms", link: "/products/bottom-loading-arms" },
  { title: "LPG Loading Arms", link: "/products/lpg-loading-arms" },
  { title: "Swivel Joints", link: "/products/swivel-joints" },
  { title: "Accessories", link: "/products/accessories" },
];

const ProductsDropdown = ({ isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    if (isMobile) {
      closeMenu();
    }
  };

  // Split product names into two lines
  // In the ProductsDropdown component, replace the formatProductName function with this:

  // Split product names into two lines PROPERLY
  const formatProductName = (name) => {
    const words = name.split(' ');
    if (words.length === 2) {
      return {
        line1: words[0],
        line2: words[1]
      };
    } else if (words.length === 3) {
      return {
        line1: words[0] + ' ' + words[1], // First two words in top line
        line2: words[2] // Last word in bottom line
      };
    } else if (words.length === 4) {
      return {
        line1: words[0] + ' ' + words[1], // First two words in top line
        line2: words[2] + ' ' + words[3] // Last two words in bottom line
      };
    }
    return { line1: name, line2: '' };
  };



  if (isMobile) {
    return (
      <li className="products-dropdown">
        <div
          className={`products-dropdown__trigger ${isOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <span>OUR PRODUCTS</span>
          <FiChevronDown className="arrow" />
        </div>

        {/* FIXED: Only show dropdown items when open */}
        <div className={`products-dropdown__menu ${isOpen ? 'open' : ''}`}>
          <div className="products-dropdown__grid">
            {PRODUCT_PAGES.map((product) => {
              const formattedName = formatProductName(product.title);
              return (
                <div key={product.link} className="products-dropdown__item">
                  <NavLink
                    to={product.link}
                    className="products-dropdown__link"
                    onClick={handleItemClick}
                  >
                    <span className="line1">{formattedName.line1}</span>
                    {formattedName.line2 && (
                      <span className="line2">{formattedName.line2}</span>
                    )}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </li>
    );
  }

  // Desktop version
  return (
    <li
      className="products-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`products-dropdown__trigger ${isOpen ? 'open' : ''}`}>
        <span>OUR PRODUCTS</span>
        <FiChevronDown className="arrow" />
      </div>

      <div className={`products-dropdown__menu ${isOpen ? 'open' : ''}`}>
        <div className="products-dropdown__grid">
          {PRODUCT_PAGES.map((product) => {
            const formattedName = formatProductName(product.title);
            return (
              <div key={product.link} className="products-dropdown__item">
                <NavLink
                  to={product.link}
                  className="products-dropdown__link"
                  onClick={handleItemClick}
                >
                  <span className="line1">{formattedName.line1}</span>
                  {formattedName.line2 && (
                    <span className="line2">{formattedName.line2}</span>
                  )}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

const Navbar = ({ menuItems = DEFAULT_MENU, logo = logoImg }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("[Navbar] menuOpen =", menuOpen);
  }, [menuOpen]);

  const toggleMenu = () => {
    console.log("[Navbar] toggleMenu ->", !menuOpen);
    setMenuOpen((v) => !v);
  };

  const closeMenu = () => {
    console.log("[Navbar] closeMenu");
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left" onClick={closeMenu}>
          <img src={logo} alt="Ferro Tube & Forge Industries" className="navbar__logo" />
        </div>

        <div className={`navbar__right ${menuOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {menuItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <ProductsDropdown
                    key={item.title}
                    isMobile={menuOpen}
                    closeMenu={closeMenu}
                  />
                );
              }

              return (
                <li key={item.title}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <NavLink to="/contact" className="navbar__contact" onClick={closeMenu}>
            CONTACT
          </NavLink>
        </div>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
};

export default Navbar;