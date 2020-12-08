import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ProjectData from "../ProjectData.js/ProjectData";
import "./AllProjects.css";

const AllProjects = () => {
  return (
    <div className="">
      <div className="all-project-container">
        <NavBar></NavBar>
        <h1 className="text-center text-white mt-4 mb-3">My Projects</h1>
        <p className="lead text-center text-secondary top-text pb-5">
          Showcase of my work
        </p>
      </div>
      <Container>
        <Row>
          {ProjectData.map((project, idx) => (
            <Col md={6} className="mb-4 mt-3">
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
                  <Card.Title className="font-weight-bold">
                    {project.name}
                  </Card.Title>
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
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllProjects;
