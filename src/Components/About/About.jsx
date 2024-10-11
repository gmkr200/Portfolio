import React from 'react';
import './About.css';
import { aboutData } from '../../Data/aboutData';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="profile-container">
                    <img
                        src={aboutData.image}
                        alt="Who AM I ?"
                        className="Develper picture"
                    />
                </div>
                <div className="text-content">
                    <h1>{aboutData.title}</h1>
                    <p>
                        {aboutData.para1}
                    </p>
                    <p>
                        {aboutData.para2}
                    </p>
                    <p>
                        {aboutData.para1}
                    </p>
                    <p>
                        {aboutData.para2}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
