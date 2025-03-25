import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from "../../Data/projectsData";
import './projects.css';

const ProjectsPage = () => {
    return (
        <section className="projects-section">
            <h2 className="projects-heading">All Projects</h2>
            <p className="projects-subheading">Explore all the projects I’ve worked on so far.</p>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <a
                                    href={project.githubLink}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        className="project-link demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view-all-projects">
                <Link to="/" className="view-all-button">
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default ProjectsPage;