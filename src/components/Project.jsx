import React from "react";
import "./project.css";

const Project = ({ project }) => {
  function openLink(link) {
    window.open(link);
  }

  return (
    <div className="project-wrapper">
      <div className="project-intro">
        <h3 className="title"
        onClick={() => openLink(`${project.photoLink.src}`)}
        >{project.title}</h3>
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
      </div>
      <iframe
        className="website-still"
        src={project.photoLink.src}
        height="400"
        width="200"
        title="Project preview"
      ></iframe>
      <div className="text">
        <p className="text">{project.description}</p>
      </div>
      <div className="project__button-wrapper">
      <button className="lookup" onClick={() => openLink(`${project.photoLink.src2}`)}>
      {/* <img
          className="github-icon-btn"
          src="../contact-icons/github.png"
          alt="github-icon"
          width="40px"
        /> */}
        Site
      </button>     
      <button className="lookup" onClick={() => openLink(`${project.github}`)}>
      {/* <img
          className="github-icon-btn"
          src="../contact-icons/github.png"
          alt="github-icon"
          width="40px"
        /> */}
        Code
      </button>
      </div>
    </div>
  );
};

export default Project;


/* ===== NOTES ===== */
//  clean up  unused // card info in general 
