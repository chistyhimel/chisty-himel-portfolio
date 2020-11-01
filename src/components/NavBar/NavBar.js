import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  // const changeBackground = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 100) {
  //     setNavBar(true);
  //   } else {
  //     setNavBar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);
  // className={
  //   navBar ? " shadow-sm navbar nav-active" : "pt-md-4 pb-md-4 shadow-sm"
  // }
  return (
    <Container fluid>
      <Navbar
        expand="md"
        className="shadow-sm navbar pt-md-4 pb-md-4 shadow-sm"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto font-weight-bold ">
            <Nav.Link className="mr-md-5 text-white">
              <NavLink
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                activeClassName="main-nav-active"
                className="nav-button"
              >
                HOME
              </NavLink>
            </Nav.Link>

            <Nav.Link className="mr-md-5 text-white">
              <NavLink
                to="/all-projects"
                style={{ textDecoration: "none", color: "white" }}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                activeClassName="main-nav-active"
                className="nav-button"
              >
                PORTFOLIO
              </NavLink>
            </Nav.Link>

            <Nav.Link className="mr-md-5 text-white">
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                activeClassName="main-nav-active"
                className="nav-button"
              >
                CONTACT
              </NavLink>
            </Nav.Link>

            <Nav.Link className="mr-md-5 text-white">
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                activeClassName="main-nav-active"
                className="nav-button"
              >
                ABOUT
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
