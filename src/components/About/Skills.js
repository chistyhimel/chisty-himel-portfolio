import React from "react";
import { Container } from "react-bootstrap";
import html from "../../image/icons/html.png";
import css from "../../image/icons/css.png";
import sass from "../../image/icons/sass.png";
import js from "../../image/icons/js.png";
import react from "../../image/icons/react.png";
import bootstrap from "../../image/icons/bootstrap.png";
import wp from "../../image/icons/wp.png";
import redux from "../../image/icons/redux.png";
import node from "../../image/icons/nodejs.png";
import express from "../../image/icons/expressjs.png";
import mongo from "../../image/icons/mongodb.png";
import material from "../../image/icons/meta-ui.png";
import heroku from "../../image/icons/heroku.png";
import netlify from "../../image/icons/netlify.png";
import firebase from "../../image/icons/firebase.png";
import git from "../../image/icons/git.png";
import github from "../../image/icons/github.png";
import vs from "../../image/icons/vs-code.png";
import npm from "../../image/icons/npm.png";
import cdt from "../../image/icons/cdt.png";
import cPanel from "../../image/icons/cp.png";
import xd from "../../image/icons/xd.png";
import figma from "../../image/icons/figma.png";

const Skills = () => {
  return (
    <>
      <h3 className="text-white">My Skills</h3>
      <h4 className="primary-text-color pb-3 pt-5 pt-md-0 border-bottom border-succes">
        Front End languages
      </h4>
      <div className="row d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={react}
            alt=""
          />
          <figcaption>React</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={redux}
            alt=""
          />
          <figcaption>Redux</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "35px", paddingTop: "8px" }}
            src={js}
            alt=""
          />
          <figcaption>JavaScript</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "57px" }}
            src={bootstrap}
            alt=""
          />
          <figcaption>Bootstrap</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px", paddingTop: "15px" }}
            src={material}
            alt=""
          />
          <figcaption>Material-UI</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "45px", paddingTop: "10px" }}
            src={sass}
            alt=""
          />
          <figcaption>Sass</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "33px" }}
            src={firebase}
            alt=""
          />
          <figcaption>Firebase</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={html}
            alt=""
          />
          <figcaption>HTML</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "36px" }}
            src={css}
            alt=""
          />
          <figcaption>CSS</figcaption>
        </div>
      </div>

      <h4 className="primary-text-color pb-3 pt-5 pt-md-0 border-bottom border-succes mt-4">
        Back End languages
      </h4>
      <div className="row d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "36px" }}
            src={node}
            alt=""
          />
          <figcaption>Node.js</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={express}
            alt=""
          />
          <figcaption>Express.js</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "45px" }}
            src={mongo}
            alt=""
          />
          <figcaption>MongoDB</figcaption>
        </div>

        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={heroku}
            alt=""
          />
          <figcaption>Heroku</figcaption>
        </div>
      </div>

      <h4 className="primary-text-color pb-3 pt-5 pt-md-0 border-bottom border-succes mt-4">
        Tools
      </h4>
      <div className="row d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={vs}
            alt=""
          />
          <figcaption>Visual Studio Code</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "43px" }}
            src={git}
            alt=""
          />
          <figcaption>Git</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={github}
            alt=""
          />
          <figcaption>GitHub</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "38px" }}
            src={netlify}
            alt=""
          />
          <figcaption>Netlify</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "75px", paddingTop: "10px" }}
            src={npm}
            alt=""
          />
          <figcaption>npm</figcaption>
        </div>
        <div className="text-center">
          <img
            className="mx-4 my-3"
            style={{ width: "40px" }}
            src={cdt}
            alt=""
          />
          <figcaption>Chrome Dev Tools</figcaption>
        </div>
        
      </div>
    </>
  );
};

export default Skills;
