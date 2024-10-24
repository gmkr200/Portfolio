import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy projects data (Replace with your actual projectsData)
const projectsData = [
    { id: 1, name: "Project 1", description: "Description 1", image: "/images/project1.jpg" },
    { id: 2, name: "Project 2", description: "Description 2", image: "/images/project2.jpg" },
    { id: 3, name: "Project 3", description: "Description 3", image: "/images/project3.jpg" },
    { id: 4, name: "Project 4", description: "Description 4", image: "/images/project4.jpg" },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
        ],
    };

    return (
        <div className="projects-container" id="projects">
            <Slider {...settings} className="projects-carousel">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            {projectsData.length > 3 && (
                <Link to="/projectsPage" className="see-all-button">
                    See All Projects
                </Link>
            )}
        </div>
    );
};

export default Projects;
