import React, { useState } from "react";

const Nav = () => {
  const [hover, setHover] = useState("orange");

  const handleHover = (color) => {
    setHover(color);
    console.log(color);
  };

  return (
    <div className="nav">
      <ul className="nav-bar">
        <a href="#about">
          <h5 className="tag"> ABOUT</h5>
        </a>

        <a href="#work">
          <h5 className="tag"> WORK</h5>
        </a>

        <a href="#contact">
          <h5 className="tag"> CONTACT</h5>
        </a>

        <a
          href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-link">RESUME</button>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
