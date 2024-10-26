
import React from 'react';
import './About.css';
import { aboutData } from '../../Data/aboutData';
import parse from "html-react-parser";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="text-content">
                    <h1>{parse(aboutData.title)}</h1>
                    <p>{parse(aboutData.para1)}</p>
                    <p>{parse(aboutData.para2)}</p>
                </div>
                <div className="profile-container">
                    <img
                        src={aboutData.image}
                        alt="Who AM I?"
                        className="profile-picture"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;


