import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import himelImg from "../../image/himel-img.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGooglePlus,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import Particles from "react-particles-js";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="header-container" id="home">
      {/* <Particles style={{ position: "absolute" }} /> */}
      <NavBar></NavBar>  
      <Container>
        <div className="header-text-box">
          <Row>
            <Col md={6}>
              <img src={himelImg} alt="" className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <h3 className="primary-text-color">HELLO I'M</h3>
              <h1 className="text-white ">CHISTY HIMEL</h1>
              <Typical
                  steps={[
                    "PROGRAMMER",
                    700,
                    "WEB DEVELOPER",
                    700,
                    "DESIGNER",
                    700,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                  className="h1 primary-text-color font-weight-bold"
                />
              <p className="text-white lead header-text">
                I'm a passionate MERN Stake Web Developer with a passion for web
                application development and programming. Able to complete
                projects efficiently with interactive and responsive design. I
                enjoy turning complex problems into simple, beautiful, and
                intuitive designs. When I'm not on my study or coding, you'll
                find me reading books, or watching movies.
              </p>

              <h2 className="text-white text-left d-flex justify-content-between icon-box">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/chistyhimel/")
                  }
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  onClick={() => window.open("https://github.com/chistyhimel/")}
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() =>
                    window.open("https://www.facebook.com/chisty.himel")
                  }
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon icon={faTwitter} />
              </h2>
              <button
                type="button"
                class="btn btn-success btn-lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1d6OfaYXPL4u8YPYlBqk1Iay-Vf7Bh8jJ/view?usp=sharing"
                  )
                }
              >
                GET RESUME
              </button>
            </Col>
          </Row>
          {/* <h3 className="primary-text-color">Hi! I'M</h3>
          <h1 className="display-3 text-white ">CHISTY HIMEL</h1>
          <p className="lead text-white mt-4 mb-4">
            I'm a
            <Typical
              steps={["Programmer", 700, "Web Developer", 700, "Designer", 700]}
              loop={Infinity}
              wrapper="p"
              className="h1 d-inline pl-2 primary-text-color"
            />
          </p>

          <h2 className="text-white text-center d-flex justify-content-between icon-box">
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() =>
                window.open("https://www.linkedin.com/in/chistyhimel/")
              }
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() => window.open("https://github.com/chistyhimel/")}
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() =>
                window.open("https://www.facebook.com/chisty.himel")
              }
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon icon={faTwitter} />
          </h2>
          <button
            type="button"
            class="btn btn-warning btn-lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1d6OfaYXPL4u8YPYlBqk1Iay-Vf7Bh8jJ/view?usp=sharing"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Download Resume
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
