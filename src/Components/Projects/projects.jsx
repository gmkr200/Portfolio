// Example: src/Components/Portfolio/Portfolio.js
import React from 'react';
import ProjectCard from './projectCard';

const projects = [
    {
        image: './assets/svg/projects/eight.svg',
        title: 'Project 1',
        description: 'This is a description of project 1.',
    },
    {
        image: './assets/svg/projects/eight.svg',
        title: 'Project 2',
        description: 'This is a description of project 2.',
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </div>
    );
};

export default Portfolio;
