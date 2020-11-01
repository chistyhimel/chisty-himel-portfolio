import React from "react";
import "./ContactForm.css";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const ContactForm = () => {
  const alert = useAlert();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ymkwpgd",
        e.target,
        "user_cJB7JRLSZoMLK4sBne9J4"
      )
      .then(
        (result) => {
          alert.success("Message sent!");
          e.target.reset();
        },
        (error) => {
          alert.error("Error! Try again.");
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact-form-container bg-color">
      <NavBar></NavBar>
      <Container>
        <div className="contact-form-box">
          <h3 className="text-center text-white mt-4 mb-3">GET IN TOUCH</h3>
          <p className="lead text-center text-white">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <Row>
            <Col md={8}>
              <h4 className=" text-white pb-3 pt-5 pt-md-0">Message Me</h4>
              <form onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <br />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <br />
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Message"
                  rows="4"
                  name="message"
                  required
                ></textarea>
                <br />
                <button className="btn btn-success btn-lg">SEND MESSAGE</button>
              </form>
            </Col>
            <Col md={4} className="text-white">
              <h4 className="text-white pb-3 pt-5 pt-md-0"> Contact Info</h4>
              <h6 className="lead border-bottom mb-4 pb-3">
                Name:{" "}
                <span className="font-weight-bold"> Fazle Chisty Himel</span>
              </h6>
              <h6 className="lead border-bottom mb-4 pb-3">
                Location:{" "}
                <span className="font-weight-bold"> Mohipal, Feni</span>
              </h6>
              <h6 className="lead border-bottom mb-4 pb-3">
                Phone: <span className="font-weight-bold"> +8801952910203</span>
              </h6>
              <h6 className="lead border-bottom mb-4 pb-3">
                Email:{" "}
                <span className="font-weight-bold">
                  {" "}
                  fazle.chisty@gmail.com
                </span>
              </h6>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ContactForm;
