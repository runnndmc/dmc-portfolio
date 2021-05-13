import React from "react";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-bar">
        <a href="#about" className="tag">
           About
        </a>

        <a href="#work" className="tag">
          Work
        </a>

        <a href="#contact" className="tag">
          Contact
        </a>

        <a
          href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-link">Resume</button>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
