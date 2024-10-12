import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { projectsData } from '../../Data/projectsData';

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-grid">
                {projectsData.slice(0, 3).map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {projectsData.length > 3 && (
                <Link to="/projectsPage" className="see-all-button">
                    See All Projects
                </Link>
            )}
        </div>
    );
};

export default Projects;
