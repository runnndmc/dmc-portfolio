import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import "./nav.css";


const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">

        <a href="#work" className="nav__button-a"><button className="nav__work-btn">Work</button></a>

        <div className="nav__icons-wrapper">
          <a href="https://github.com/runnndmc" className="nav__social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt className="fa-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/daynachristison/" className="nav__social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="fa-icon"/>
          </a>
        </div>

        <a href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing" className="nav__button-a" target="_blank"rel="noopener noreferrer">
          <button className="nav__resume-btn">Resume</button>
        </a>

      </div>
    </nav>
  );
};

export default Nav;

/* ===== NOTES ===== */
// button update!