import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="profile-container">
                    <img src="/images/dp.jpg" alt="Manikumarreddy Gajjela" className="profile-picture" />
                </div>
                <div className="text-content">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <strong>Manikumarreddy Gajjela</strong>, a passionate full-stack developer based in New York, NY. With over 9 years of experience in software development, I specialize in creating robust and scalable web applications using a variety of modern technologies.
                    </p>
                    <p>
                        Currently, I work at <strong>Tetra Computing LLC</strong> as a Full Stack Developer, where I develop and maintain high-performance web applications utilizing <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>AWS</strong>. I take pride in architecting RESTful APIs, optimizing database performance, and collaborating in Agile teams to ensure timely project delivery.
                    </p>
                    <p>
                        My previous role at <strong>Whistle Drive</strong> involved leading front-end development for a logistics platform, enhancing user engagement through real-time data interactions. I’m skilled in using <strong>PostgreSQL</strong> and <strong>MongoDB</strong> for database management, and I embrace modern development practices like Test-Driven Development (TDD) to ensure code quality and reliability.
                    </p>
                    <p>
                        I hold a Bachelor's degree in Computer Science from <strong>Osmania University</strong> and am currently pursuing my Master’s degree at <strong>Pace University</strong>. I'm always eager to learn new technologies, from front-end frameworks to cloud services, and I’m particularly interested in how technology can solve real-world problems.
                    </p>
                    <p>
                        Outside of coding, I have a keen interest in car technology and exploring the latest innovations in the automotive industry. I believe that software development, much like engineering, requires creativity, precision, and a passion for excellence.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
