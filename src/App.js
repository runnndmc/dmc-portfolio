import React from 'react';

import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header>
        <h5>about</h5>
        <h5>work</h5>
        <button>Resume</button>
      </header>
      <aside>
        <h3>Hello World!</h3>
      </aside>
      <main>
        <h5 className='myname'>I'm Dayna Christison</h5>
        <h2 className='fullstack'>Full Stack Developer<span className='dot'>.</span></h2>
      </main>
    </div>
  )
}

export default App;
