import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" className="logo-img" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>

                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
