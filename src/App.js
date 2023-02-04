import React from 'react';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="">   
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>

  );
}

export default App;
