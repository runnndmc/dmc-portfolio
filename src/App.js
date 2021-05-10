import React from "react";

import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Work from "./Work";
import ContactForm from "./ContactForm";

const App = ({ projectsList }) => {
  //try doing switch and root
  //header contains the Nav - changes to layout?
  //exact path="/about" component={About}
  //exact path="/work" component={Work} - Projects?
  //exact path="/Contact" component={Contact}

  return (
    <div className="body">
      <span id="home"> &nbsp; </span>

      <Header />
      {/* switch to Logo or something else */}

      <Hero />
      <aside></aside>
      <Nav />

      <AboutMe />
      {/* switch to About  */}
      <Work projectsList={projectsList}/>
      <ContactForm />
    </div>
  );
};

export default App