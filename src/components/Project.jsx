import React from "react";
import {
  FaGithubAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./project.css";

const Project = ({ project }) => {
  function openLink(link) {
    window.open(link);
  }

  return (
    <div className="project__card">
      <h3
        className="project__title"
        onClick={() => openLink(`${project.photoLink.src}`)}
      >
        {project.title}
      </h3>

      <div className="project__video-container">
        <div className="project__video-box">
          <video
            className="project__clip"
            src={project.videoLink.src}
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            muted
            type="video/mp4"
          ></video>
        </div>
      </div>
  
      <p className="project__text">{project.description}</p>

      <div className="project__buttons-wrapper">
        <button onClick={() => openLink(`${project.photoLink.src2}`)}>
          <FaExternalLinkAlt style={{ fontSize: "30px", color: "white" }} />
        </button>

        <button onClick={() => openLink(`${project.github}`)}>
          <FaGithubAlt style={{ fontSize: "40px", color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Project;

/* ===== NOTES ===== */
//  clean up  unused // card info in general !
