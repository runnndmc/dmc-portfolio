import React from "react";
import "./App.css";

import Hero from "./screens/Hero";
import About from "./screens/About";
import Work from "./screens/Work";
import Contact from "./screens/Contact";
import Tech from "./screens/Tech";

const App = ({ projectsList }) => {
  return (
    <div className="body">
      <span id="home"> &nbsp; </span>
      <Hero />
      <About />
      <Tech/>
      <Work projectsList={projectsList} />
      <Contact />
    </div>
  );
};

export default App;
