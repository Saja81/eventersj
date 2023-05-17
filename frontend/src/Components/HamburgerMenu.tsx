import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchField from "./SearchField";
import SecondaryButton from "./SecondaryButton";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="containerlogo">
            <p id="logo">Eventer</p>
          </div>
        </Col>

        <Col>
          <div className="Nav-bar">
            <nav id="menu" className={isOpen ? "open" : ""}>
              <Row>
                <Col>
                  <div className="containerlogo">
                    <p id="logo">Eventer</p>
                  </div>
                </Col>
                <Col>
                  <button
                    id="HamburgerButton"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                    className={`hamburger ${isOpen ? "open" : ""}`}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </Col>
              </Row>
              <Row>
                <ul className="NavBar-list">
                  <SearchField />

                  <li>
                    <Link className="NavBar-links" to="/eventlist">
                      Evenemang
                    </Link>
                  </li>

                  <li>
                    <Link className="NavBar-links" to="/eventlist">
                      Kontakta oss
                    </Link>
                  </li>
                </ul>
                <SecondaryButton> Logga in </SecondaryButton>
                <li>
                  <Link className="NavBar-links" to="/eventlist">
                    Skapa ett konto
                  </Link>
                </li>
              </Row>
            </nav>
          </div>
        </Col>
        <Col>
          <div className="containerbutton">
            <button
              id="HamburgerButton"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className={`hamburger ${isOpen ? "open" : ""}`}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HamburgerMenu;
