import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from '../../Data/projectsData';

const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
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
    );
};

export default Projects;
