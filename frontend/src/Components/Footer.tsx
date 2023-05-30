import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Tiktok,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="gradient">
      <Container>
        <Row>
          <div className="containerlogo">
            <p id="logo">Eventer</p>
          </div>
        </Row>
        <Row>
          <p>Följ oss</p>
        </Row>
        <Row>
          <Col>
            <Instagram />
          </Col>
          <Col>
            <Facebook />
          </Col>
          <Col>
            <Twitter />
          </Col>
          <Col>
            <Youtube />
          </Col>
          <Col>
            <Tiktok />
          </Col>
        </Row>
        <Row>
          <div className="footer">
            <ul className="Footer-list">
              <li>
                <Link className="Footer-links" to="/">
                  Kontakt
                </Link>
              </li>

              <li>
                <Link className="Footer-links" to="/Login">
                  Logga in
                </Link>
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <p>Våra samarbetspartners</p>
        </Row>
        <Row>
          <Col>
            <img
              width="50px"
              height="19px"
              src="/images/Axs_logo.png"
              alt="Axs"
            ></img>
          </Col>
          <Col>
            <img
              width="128px"
              height="17px"
              src="/images/Ticketmaster-Logo.png"
              alt="Ticketmaster"
            ></img>
          </Col>
          <Col>
            <img
              width="94px"
              height="19px"
              src="/images/Got_Logo.png"
              alt="Göteborg Stad"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
