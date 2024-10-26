import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: "Master’s in Computer Science",
            institution: "Pace University, New York",
            duration: "2023 - Present",
            details: "Specializing in Full Stack Development and Cloud Computing.",
        },
        {
            degree: "Bachelor’s in Computer Science",
            institution: "Osmania University, India",
            duration: "2015 - 2019",
            details:
                "Graduated with distinction. Focused on software engineering, data structures, and algorithms.",
        },
    ];

    return (
        <div className="education-wrapper">
            <h1 className="education-header">My Educational Journey</h1>
            <div className="education-content">
                <div className="education-cards">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3 className="degree">{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="duration">{edu.duration}</p>
                            <p className="details">{edu.details}</p>
                        </div>
                    ))}
                </div>
                <div className="roadmap">
                    {educationData.map((_, index) => (
                        <div key={index} className="roadmap-step">
                            <div className="circle" />
                            {index < educationData.length - 1 && <div className="line" />}
                        </div>
                    ))}
                </div>
            </div>ucationEducation;
        </div>
    );
};

export default Education;