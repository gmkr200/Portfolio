import React from "react";
import { projectsData } from "../../Data/projectsData";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = ({ showAll = false }) => {
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <section className="projects-section">
            <h2 className="projects-heading">My Projects</h2>
            <p className="projects-subheading">A collection of works showcasing my skills and creativity.</p>
            <div className="projects-grid" id="projects">
                {displayedProjects.map((project) => (
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
            {!showAll && (
                <div className="view-all-projects">
                    <Link to="/projectsPage" className="view-all-button">
                        View All Projects
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Projects;