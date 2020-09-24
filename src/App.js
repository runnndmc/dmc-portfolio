import React from 'react';

import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header>
          <ul className='direct-links'>
            <h5>about</h5>
            <h5>work</h5>
            <button>Resume</button>
          </ul> 
      </header>
      <aside>
        <div className='hello'>
          <h3>Hello World!</h3>
        </div>
      </aside>
      <main>
        <h5 className='myname'>I'm Dayna Christison</h5>
        <h2 className='fullstack'>Full Stack Developer<span className='dot'>.</span></h2>
      </main>
    </div>
  )
}

export default App;
