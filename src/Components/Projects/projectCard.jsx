// src/Components/ProjectCard/ProjectCard.js
import React from 'react';
import './projectCard.css'; // Import the CSS for styling

const ProjectCard = ({ image, title, description }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
