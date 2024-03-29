import React from "react";
import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";

import "./project.css";

const Project = ({ project }) => {
  function openLink(link) {
    window.open(link);
  }

  return (
    <div className="project__card">
      <h3
        className="project__title"
        onClick={() => openLink(`${project.links.src}`)}
      >
        {project.title}
      </h3>

      <div className="project__container">
        <div
          className="project__wrapper"
          onClick={() => openLink(`${project.links.src}`)}
        >
          <img src={project.links.imgSrc} alt={project.alt} width="100%"></img>
        </div>
        <p className="project__text">{project.description}</p>
      </div>

      <div className="project__buttons-wrapper">
        <button onClick={() => openLink(`${project.links.src}`)}>
          <FaExternalLinkAlt style={{ fontSize: "25px" }} />
        </button>

        {project.hasOwnProperty("github") ? (
          <button onClick={() => openLink(`${project.github}`)}>
            <FaGithubAlt style={{ fontSize: "35px" }} />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Project;
