import React from "react";
import Landing from "./Components/Landing/Landing.js";
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/projects.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js"; // Updated import
import Education from "./Components/Education/Education.jsx";

function Layout() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop /> {/* Move it here after the main content */}
    </div>
  );
}

export default Layout;
