import React, { useState, useEffect } from "react";

const Nav = () => {

    const [hover, setHover] = useState(false)
    const [color, setColor] = useState("")

    function grabEvent(){
        setHover(true)
        setColor('blue')
        console.log('hover')
    }

    useEffect(grabEvent, [hover])


  return (
    <div className="nav">
      <ul className="nav-bar">

        <a href="#about" onMouseEnter={grabEvent}>{hover}
          <h5 className="about-tag">ABOUT</h5>
        </a>

        <a href="#work" onMouseEnter={grabEvent}>
          <h5 className="work-tag">WORK</h5>
        </a>
        <a href="#contact" onMouseEnter={grabEvent} >
          <h5 className="contact-tag">CONTACT</h5>
        </a>
        <a
          href="https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={grabEvent}
        >
          <button>RESUME</button>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
