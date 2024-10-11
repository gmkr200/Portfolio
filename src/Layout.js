import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Landing from './Components/Landing/Landing.js'; 
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/projects.jsx'
function Layout() {
  return (
    <div>
        <Landing />
        <About />
        <Skills />
        <Projects/>
        <Contact />
      
    </div>
  )
}

export default Layout
