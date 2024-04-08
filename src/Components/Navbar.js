import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header fixed-top">
      <div className="container">
        <NavLink exact to="/" className="logo">
          logo
        </NavLink>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeClassName="active"
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/designs" activeClassName="active" onClick={closeMenu}>
              Our Designs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
