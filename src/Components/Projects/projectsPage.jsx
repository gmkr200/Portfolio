import { Link } from 'react-router-dom'
import { projectsData } from "../../Data/projectsData";
import './projects.css';
const ProjectsPage = () => {
    return (
        <div className="all-projects-container">
            <h1>All Projects</h1>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/" className="home-button">Home</Link>
        </div>
    );
};
export default ProjectsPage;