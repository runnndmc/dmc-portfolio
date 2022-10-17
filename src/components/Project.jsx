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
        onClick={() => openLink(`${project.links.videoSrc}`)}
      >
        {project.title}
      </h3>

      <div className="project__video-container">
        <div className="project__video-box">
          {/* <video
            className="project__clip"
            src={project.links.videoSrc}
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            muted
            type="video/mp4"
          ></video> */}
          <img src={project.imgSrc} alt="project preview" width="100%"></img>
        </div>
        <p className="project__text">{project.description}</p>
      </div>


      <div className="project__buttons-wrapper">
        <button onClick={() => openLink(`${project.links.src2}`)}>
          <FaExternalLinkAlt style={{ fontSize: "30px"}} />
        </button>

        <button onClick={() => openLink(`${project.github}`)}>
          <FaGithubAlt style={{ fontSize: "40px"}} />
        </button>
      </div>
    </div>
  );
};

export default Project;
