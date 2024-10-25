import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "../../Data/projectsData";
import "./projects.css"; // Ensure the CSS is imported

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200, // Smooth and slower movement
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500, // Adjusted autoplay speed
        cssEase: "ease-in-out", // Smooth transition effect
        pauseOnHover: true,
    };

    return (
        <section className="projects-section">
            <h2 className="projects-heading">My Projects</h2>
            <div className="projects-container" id="projects">
                <Slider {...settings}>
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card-wrapper">
                            <div className="project-card">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="project-image"
                                />
                                <div className="project-info">
                                    <h3 className="project-title">{project.name}</h3>
                                    <a
                                        href={project.githubLink}
                                        className="github-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;
