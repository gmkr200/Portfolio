import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Landing.css';
import { socialsData } from '../../Data/socialsData'; // Go back two directories to reach `Data`

const handleContactClick = () => {
    // Define your contact logic here, e.g., open a contact form or send an email
    alert("Contact form will open");
};

const handleDownloadResume = () => {
    // Define your resume download logic here
    const resumeLink = './path-to-your-resume.pdf'; // Update with your actual resume path
    window.open(resumeLink, '_blank');
};


const About = () => {
    return (
        <div className='landing'>
            <div className='landing--container'>
                {/* Left Section - Social Media Links */}
                <div className='landing--container-left'>
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className='landing--social' aria-label='LinkedIn' />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className='landing--social' aria-label='GitHub' />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a href={socialsData.twitter} target='_blank' rel='noreferrer'>
                                <FaTwitter className='landing--social' aria-label='Twitter' />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a href={socialsData.youtube} target='_blank' rel='noreferrer'>
                                <FaYoutube className='landing--social' aria-label='YouTube' />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram}target='_blank' rel='noreferrer'>
                                <FaInstagram className='landing--social' aria-label='instagram' />
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Section */}
                <img
                    src="./images/dp.jpg" // Your profile picture path
                    alt='Manikumarreddy Gajjela'
                    className='landing--img'
                    style={{ width: '380px', borderRadius: '50%' }} // Adjust size as needed
                />

                {/* Right Section - About Description */}
                <div className='landing--container-right'>
                    <div className='lcr--content' style={{ color: '#e0d9d9' }}>
                        <h1>About Me</h1>
                        <p>
                            Hi, I'm <strong>Manikumarreddy Gajjela</strong>, a passionate full-stack developer based in New York, NY. With over 9 years of experience in software development, I specialize in creating robust and scalable web applications using a variety of modern technologies.
                        </p>
                        <p>
                            Currently, I work at <strong>Tetra Computing LLC</strong> as a Full Stack Developer, where I develop and maintain high-performance web applications utilizing <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>AWS</strong>.
                        </p>
                        <p>
                            I hold a Bachelor's degree in Computer Science from <strong>Osmania University</strong> and am currently pursuing my Master’s degree at <strong>Pace University</strong>.
                        </p>
                         {/* Buttons Section */}
                 <div className='button-container'>
                                <button onClick={handleDownloadResume} className='landing-button'>Download Resume</button>
                                <button onClick={handleContactClick} className='landing-button'>Contact Me</button>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
