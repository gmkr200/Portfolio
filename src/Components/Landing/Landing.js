import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Landing.css"; // Your CSS styling
import { socialsData } from "../../Data/socialsData"; // Social media links data
import dp from "../../assets/images/dp.jpg"; // Ensure the image path is correct
import Manikumarreddy from "../../assets/resume/Manikumarreddy.pdf";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing--container">
        {/* Left Section - Social Media Links */}
        <div className="landing--container-left">
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin className="landing--social" aria-label="LinkedIn" />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub className="landing--social" aria-label="GitHub" />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="landing--social" aria-label="Twitter" />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube className="landing--social" aria-label="YouTube" />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  aria-label="Instagram"
                />
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <img
          src={dp}
          alt="Manikumarreddy Gajjela"
          className="landing--img"
          style={{ width: "380px", borderRadius: "50%" }}
        />

        {/* Right Section - About Description */}
        <div className="landing--container-right">
          <div className="lcr--content" style={{ color: "#e0d9d9" }}>
            <h1>About Me</h1>
            <p>
              Hi, I'm <strong>Manikumarreddy Gajjela</strong>, a passionate
              full-stack developer based in New York, NY. With over 4 years of
              experience, I specialize in creating robust and scalable web
              applications using modern technologies.
            </p>
            <p>
              Currently, I work at <strong>Tetra Computing LLC</strong> as a
              Full Stack Developer, developing high-performance applications
              with <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, and <strong>AWS</strong>.
            </p>
            <p>
              I hold a Bachelor's degree from{" "}
              <strong>Osmania University</strong> and am pursuing a Master’s at{" "}
              <strong>Pace University</strong>.
            </p>
            {/* Buttons Section */}
            <div className="button-container">
              <a
                href={Manikumarreddy}
                download="resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="landing-button">View Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
