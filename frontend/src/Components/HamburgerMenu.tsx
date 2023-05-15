import { Link } from "react-router-dom";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="Container-logo">
        <p id="logo">Eventer</p>
      </div>
      <div className="container">
        <button
          id="HamburgerButton"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="Nav-bar">
        <nav id="menu" className={isOpen ? "open" : ""}>
          <ul className="NavBar-list">
            <li>
              <Link className="NavBar-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="NavBar-links" to="/eventlist">
                Evenemang
              </Link>
            </li>
            <li>
              <Link className="NavBar-links" to="/eventlist">
                Partners
              </Link>
            </li>
            <li>
              <Link className="NavBar-links" to="/eventlist">
                Kontakta oss
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
