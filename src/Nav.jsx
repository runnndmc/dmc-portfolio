import React, { useState } from "react";

const Nav = () => {
  const [hover, setHover] = useState("orange");

  const preHoverStyles = {
    fontSize: "50px",
    color: `${hover}`,
  };

  const handleHover = (color) => {
    setHover(color);
    console.log(color);
  };

  return (
    <div className="nav">
      <ul className="nav-bar">
        <a href="#about">
          <h5
            className="about-tag"
            style={preHoverStyles}
            onMouseEnter={() => handleHover("white")}
            onMouseLeave={() => handleHover("orange")}
          >
            {" "}
            ABOUT
          </h5>
        </a>

        <a href="#work">
          <h5
            className="work-tag"
            style={preHoverStyles}
            onMouseEnter={() => handleHover("white")}
            onMouseLeave={() => handleHover("orange")}
          >
            {" "}
            WORK
          </h5>
        </a>

        <a href="#contact">
          <h5
            className="contact-tag"
            style={preHoverStyles}
            onMouseEnter={() => handleHover("white")}
            onMouseLeave={() => handleHover("orange")}
          >
            {" "}
            CONTACT
          </h5>
        </a>

        <a
          href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>RESUME</button>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
