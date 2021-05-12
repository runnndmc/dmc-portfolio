import React from "react";

import "./App.css";

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Work from "./sections/Work";
import ContactForm from "./sections/ContactForm";

function App() {
  return (
    <div className="body">
      <span id="home"> &nbsp; </span>
      <Hero />
      <aside></aside>
      <AboutMe />
      <Work />
      <ContactForm />
    </div>
  );
}

export default App;
