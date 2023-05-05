import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default App
