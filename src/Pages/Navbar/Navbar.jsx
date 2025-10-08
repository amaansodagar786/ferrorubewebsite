import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";
import logoImg from "../../assets/logo/logo.jpg"; // adjust path if required

const DEFAULT_MENU = [
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "CAPABILITIES", link: "/capabilities" },
  { title: "OUR PRODUCTS", link: "/products" },
  { title: "INQUIRY FORM", link: "/contact" },
];

const Navbar = ({ menuItems = DEFAULT_MENU, logo = logoImg }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("[Navbar] menuOpen =", menuOpen); // keep logs for testing
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

        {/* Desktop / Tablet right area (becomes slide-in on mobile) */}
        <div className={`navbar__right ${menuOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {menuItems.map((it) => (
              <li key={it.title}>
                <NavLink to={it.link} className={({ isActive }) => (isActive ? "navlink active" : "navlink")} onClick={closeMenu}>
                  {it.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="navbar__contact" onClick={closeMenu}>
            CONTACT
          </NavLink>
        </div>

        {/* hamburger / close */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* backdrop for mobile when menu is open */}
      {menuOpen && <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
};

export default Navbar;
