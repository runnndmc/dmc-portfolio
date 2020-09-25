import React from 'react';
import {Link} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header>
          <ul className='direct-links'>
            <Link to='/about'>about</Link>
            <Link to='/work'>work</Link>
            <button>Resume</button>
          </ul> 
      </header>
      <main>
          <h3 className='hello'>Hello World!</h3>
      </main>
      <h3 className='myname'>I'm Dayna Christison</h3>
      <div className='title'>
        <h2 className='fullstack'>Full Stack Developer<span className='dot'>.</span></h2>
      </div>

    </div>
  )
}

export default App;
