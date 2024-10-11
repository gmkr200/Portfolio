import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import { ThemeContext } from './contexts/ThemeContext';
import Landing from './Components/Landing/Landing.js'; 
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';

import Layout from './Layout.js';
import ScrollToTop from './ScrollToTop.js';




function App() {
    return (
        <div className="body">
            <Router>
                <Header />
                <Layout />
                <ScrollToTop />
                <Footer />
            </Router>
        </div>
    );
}
export default App;
