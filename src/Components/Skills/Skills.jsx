import React from 'react';
import './Skills.css'; // Import your CSS file for styles
import Marquee from "react-marquee-slider";
import { skillsImage } from '../../Data/skillsImage';
import { skillsData } from '../../Data/skillsData'



const Skills = () => {
    const skillBoxStyle = {
        backgroundColor: '#212121', // Added quotes around the color value
        boxShadow: `0px 0px 30px #B6B6B6cc` // This line is correct
    }


    return (
        <div className="skills" style={{ backgroundColor: '#2E4B3A' }}>
            <div className="skillsHeader">
                <h2 style={{ color: '#B6B6B6' }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill.name} />
                                <h3 style={{ color: '#FFFFFF' }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;