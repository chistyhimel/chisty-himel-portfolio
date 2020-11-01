import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center bg-color pt-5 pb-3">
      <Container>
        <hr className="bg-secondary" />
        <small style={{ fontSize: "13px", fontWeight:" 100" }} className="lead text-white">
          DESIGN & CODED BY{" "}
          <span className="font-weight-bold ">CHISTY HIMEL</span>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
