import React from 'react'
import Landing from './Components/Landing/Landing.js'; 
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/projects.jsx'
import Footer from'./Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
function Layout() {
  return (
    <div>
      <Header />
        <Landing />
        <About />
        <Skills />
        <Projects/>
        <Contact />
        <Footer />
      
    </div>
  )
}

export default Layout
