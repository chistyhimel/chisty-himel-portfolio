import React from "react";
import {
  Card,
  CardColumns,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./Projects.css";
import doctorsPortalImg from "../../image/project-ss/doctors-portal-ss.jpg";
import redOnionImg from "../../image/project-ss/red-onion-ss.jpg";
import volunteerNetImg from "../../image/project-ss/volunteer-network-ss.jpg";
import creativeAgencyImg from "../../image/project-ss/creative-agency-ss.jpg";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import ProjectData from "../ProjectData.js/ProjectData";

const Projects = () => {
  const projects = ProjectData.slice(0, 4);
  return (
    <Container className="project-container" id="portfolio">
      <h1
        className="text-center mt-5 pt-5"
        style={{ fontFamily: "Poppins", fontWeight: "600" }}
      >
        Latest <span className="primary-text-color">PROJECTS</span>
      </h1>
      <hr className="bg-secondary m-4" />
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} className="mb-4">
            <Card className="border-0 project-card" key={idx}>
              <Carousel className="project-img-border">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.img}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.img}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.img}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body className="text-center">
                <Card.Title>{project.name}</Card.Title>
                <hr className="bg-secondary" />
                <Card.Text className="text-left">
                  {project.description}{" "}
                  <h5>
                    {project.used.map((item) => (
                      <span class="badge badge-secondary font-weight-light border mr-2 mt-2">
                        {item}
                      </span>
                    ))}
                  </h5>
                </Card.Text>
                <button
                  type="button"
                  class="btn btn-success  btn-block"
                  onClick={() => window.open(project.liveSite)}
                >
                  Live Site
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success  btn-block"
                  onClick={() => window.open(project.github)}
                >
                  Github
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Link
          to="/all-projects"
          style={{ textDecoration: "none", color: "white" }}
        >
          <button class="btn btn-success btn-lg mt-5 mb-5">
            VIEW ALL PROJECTS >
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Projects;
