import React from "react";

import "./App.css";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

const App = ({ projectsList }) => {
  return (
    <div className="body">
      <span id="home"> &nbsp; </span>
      <Hero />
      <About />
      <Work projectsList={projectsList}/>
      <Contact />
    </div>
  );
}

export default App;
