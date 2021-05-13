import React from "react";

import "./App.css";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import ContactForm from "./sections/ContactForm";

function App() {
  return (
    <div className="body">
      <span id="home"> &nbsp; </span>
      <Hero />
      <About />
      <Work />
      <ContactForm />
    </div>
  );
}

export default App;
