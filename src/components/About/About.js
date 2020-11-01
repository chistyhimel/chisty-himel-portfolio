import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./About.css";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGooglePlus,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about-container">
      <div className="bg-color">
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col md={6} className="text-white">
              <h6>Hello There</h6>
              <h3>My name is</h3>
              <h1 className="display-4 primary-text-color">
                Fazle Chisty Himel
              </h1>
              <p className="lead">
                I'm a MERN Stake Web Developer & Programmer. I'm currently
                studying in Information Science at Noakhali Science and
                Technology University. <br />I am a detail-oriented person who
                strives to create the best quality results. I specialize in
                building seamless websites from start to finish with interactive
                and responsive design.I enjoy turning complex problems into
                simple, beautiful, and intuitive designs. <br />I love creative
                people and interesting projects.Let's work together!
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

            <Col md={6} className="primary-text-color">
              <Skills></Skills>
            </Col>
                  </Row>
                  <Footer></Footer>
        </Container>
      </div>
    </div>
  );
};

export default About;
