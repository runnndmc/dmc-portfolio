import React, { useState } from "react";

const Nav = () => {
  const [hover, setHover] = useState("orange");

  const aboutHoverStyles = {
    fontSize: "50px",
    color: 'blue'
  };
  const workHoverStyles ={
    fontSize: "50px",
    color: 'yellow'
  }
  const contactHoverStyles = {
    fontSize: "50px",
    color: 'red'
  };


  const postHoverStyles = {
    background: `${hover}`
  }

  const handleHover = (color) => {
    setHover(color);
    console.log(color);
  };

  return (
    <div className="nav">
      <ul className="nav-bar">
        <a href="#about"
          style={postHoverStyles}>
          <h5
            className="about-tag"
            style={aboutHoverStyles}
            onMouseEnter={() => handleHover("orange")}
            onMouseLeave={() => handleHover("white")}
          >
            {" "}
            ABOUT
          </h5>
        </a>

        <a href="#work"
         style={postHoverStyles}>
          <h5
            className="work-tag"
            style={workHoverStyles}
            onMouseEnter={() => handleHover("orange")}
            onMouseLeave={() => handleHover("white")}
          >
            {" "}
            WORK
          </h5>
        </a>

        <a href="#contact"
          style={postHoverStyles}>
          <h5
            className="contact-tag"
            style={contactHoverStyles}
            onMouseEnter={() => handleHover("orange")}
            onMouseLeave={() => handleHover("white")}
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
