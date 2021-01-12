import React from 'react';

import './App.css';

import Header from './Header';
import Hero from './Hero';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Work from './Work';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className='body'>
      <span id='home'> &nbsp; </span>
      <Header/>
      <Hero />
      <aside></aside>
      <Nav />
      <AboutMe />
      <Work />
      <ContactForm />
    </div>
  );
}

export default App;
