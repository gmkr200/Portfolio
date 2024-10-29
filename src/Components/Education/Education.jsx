import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa'; // Import icon
import edu from '../../assets/images/edu.png'; // Import image

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
            <h1 className="education-title">My Educational Journey</h1> {/* Heading */}
            <div className="education-content">
                <div className="education-roadmap">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="card-content">
                                <h3 className="degree">{edu.degree}</h3>
                                <p className="institution">{edu.institution}</p>
                                <p className="duration">{edu.duration}</p>
                                <p className="details">{edu.details}</p>
                            </div>
                            <div className="circle" />
                        </div>
                    ))}
                </div>

                <div className="education-image">
                    <div className="image-container">
                        <img src={edu} alt="Profile" className="profile-image" />
                        <div className="icon-overlay">
                            <FaGraduationCap className="overlay-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
