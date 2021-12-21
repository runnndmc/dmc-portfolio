import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithubAlt } from "react-icons/fa";


import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <a href="#work">
          <button className="nav__work-btn">Work</button>
        </a>
        <div className="connect-icons">
          <FaGithubAlt/>
          {/* <a
            href="https://github.com/runnndmc"
            target="_blank"
            rel="noopener noreferrer"
            className="tag"
          >
            <img
              className="github-icon"
              src="../contact-icons/github.png"
              alt="github-icon"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/daynachristison/"
            target="_blank"
            rel="noopener noreferrer"
            className="tag"
          >
            <img
              className="linkedin-icon"
              src="../contact-icons/linkedin.png"
              alt="LinkedIn-icon"
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-link">Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

/* ===== NOTES ===== */
// clean up css
// button update!
// icons from font-awesome && removed from icons
