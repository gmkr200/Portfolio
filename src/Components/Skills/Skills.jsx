import React from 'react';
import './Skills.css'; // Import the updated CSS
import Marquee from 'react-marquee-slider';
import { skillsImage } from '../../Data/skillsImage';
import { skillsData } from '../../Data/skillsData';

const Skills = () => {
    const skillBoxStyle = {
        backgroundColor: '#212121',
        boxShadow: '0px 0px 30px #B6B6B6cc',
    };

    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee gradient={false} speed={80} pauseOnHover={true} direction="left">
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill.name} />
                                <h3>{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Skills;
