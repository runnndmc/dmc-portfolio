import React from 'react';
import { Route, Switch} from 'react-router-dom'
import About from './Nav';

import './App.css';

import Header from './Header';
import Hero from './Hero';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Work from './Work';
import Footer from './Footer';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className='body'>
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
