import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialsData } from "../../Data/socialsData"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Made by Manikumarreddy</p>
                <ul className="social-links">
                    <li>
                        <a href={socialsData.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" /> GitHub
                        </a>
                    </li>
                    <li>
                        <a href={socialsData.linkedIn} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="mailto:gmkr300@gmail.com">
                            <FaEnvelope className="social-icon" /> Email
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
