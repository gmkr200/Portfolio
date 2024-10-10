import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Your Name. All Rights Reserved.</p>
                <ul className="social-links">
                    <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:youremail@example.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
