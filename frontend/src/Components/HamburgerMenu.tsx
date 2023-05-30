import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecondaryButton from "./SecondaryButton";

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
            {isLogoVisible && <p id="logo1">Eventer</p>}
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
                    className={`hamburger1 ${isOpen ? "open" : ""}`}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </Col>
              </Row>
              <Row>
                <ul className="NavBar-links">
                  {/* <SearchField /> */}
                  <li>
                    <Link to="">Search</Link>
                  </li>

                  <li>
                    <Link to="/eventlist">Evenemang</Link>
                  </li>

                  <li>
                    <Link to="/eventlist">Kontakta oss</Link>
                  </li>

                  <SecondaryButton>
                    {" "}
                    <Link to="/login"></Link> Logga in{" "}
                  </SecondaryButton>
                  <li>
                    <Link to="/signup">Skapa ett konto</Link>
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
