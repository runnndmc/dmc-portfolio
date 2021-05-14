import React from "react";
import "./project.css";

const Project = ({ project }) => {
  function openLink(link) {
    window.open(link);
  }

  return (
    <div className="project-wrapper">
      <h3 className="title">{project.title}</h3>
      <div className="built-with">
        <img
          className="dev-icon"
          src={project.devIcons.src1}
          alt="Tech stack Icon"
        />
        <img
          className="dev-icon"
          src={project.devIcons.src2}
          alt="Tech stack Icon"
        />
        <img
          className="dev-icon"
          src={project.devIcons.src3}
          alt="Tech stack Icon"
        />
      </div>
      <img
        className="website-still"
        src={project.photoLink.src}
        onClick={() => openLink(`${project.photoLink.href}`)}
        alt="Project preview"
      />
      <div className="text">
        <p>{project.description}</p>
      </div>
      <button className="lookup" onClick={() => openLink(`${project.github}`)}>
        Code
        <img
          className="github-icon"
          src="../contact-icons/github.png"
          alt="github-icon"
        />
      </button>
    </div>
  );
};

export default Project;
