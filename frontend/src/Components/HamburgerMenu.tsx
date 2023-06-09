import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecondaryButtonNav from "./SecondaryButtonNav";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsLogoVisible(isOpen);
    setIsButtonVisible(isOpen);
  };
  return (
    <Container>
      <Row id="headerrow">
        <Col>
          <div className="containerlogo">
            {isLogoVisible && (
              <Link to="/" id="logo1">
                Eventer
              </Link>
            )}
          </div>
        </Col>

        <Col>
          <div className="Nav-bar">
            <nav id="menu" className={isOpen ? "open" : ""}>
              <Row>
                <Col>
                  <div className="containerlogo">
                    <Link to="/">
                      <p id="logo">Eventer</p>
                    </Link>
                  </div>
                </Col>

                <Col>
                  <button
                    id="HamburgerButton"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                    className={`hamburger1 ${isOpen ? "open" : ""}`}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </Col>
              </Row>
              <Row className="Row-Nav">
                <ul className="NavBar-links">
                  {/* <SearchField /> */}
                  <li className="NavBar-link">
                    <Link to="">Search</Link>
                  </li>

                  <li className="NavBar-link">
                    <Link to="/eventlist">Evenemang</Link>
                  </li>

                  <li className="NavBar-link">
                    <Link to="/eventlist">Kontakta oss</Link>
                  </li>
                </ul>
              </Row>
              <Row className="Row-Nav">
                <ul className="NavBar-links">
                  <SecondaryButtonNav>
                    <Link to="/login">Logga in</Link>
                  </SecondaryButtonNav>

                  <li className="NavBar-link">
                    <Link to="/signup">Skapa ett konto</Link>
                  </li>

                  <li className="NavBar-link">
                    <Link to="/profile">Mina favoritevent</Link>
                  </li>
                </ul>
              </Row>
            </nav>
          </div>
        </Col>
        <Col className="containerbutton">
          {/* <div> */}
          {isButtonVisible && (
            <button
              id="HamburgerButton"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className={`hamburger2 ${isOpen ? "open" : ""}`}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          )}
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default HamburgerMenu;
