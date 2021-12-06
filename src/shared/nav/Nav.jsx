import React from "react";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-bar">
        <a href="#work">
          <button className="work-link">Work</button>
        </a>
        <div className="connect-icons">
          <a
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
          </a>
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
    </div>
  );
};

export default Nav;

/* ===== NOTES ===== */
// nav to nav tag
// clean up css
