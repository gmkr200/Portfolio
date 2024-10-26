import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Landing.css"; // Your CSS styling
import { socialsData } from "../../Data/socialsData"; // Social media links data
import Manikumarreddy from "../../assets/resume/Manikumarreddy.pdf";
import { LandingData } from "../../Data/Landing";
import parse from "html-react-parser";
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
          src={LandingData.dp}
          alt="Manikumarreddy Gajjela"
          className="landing--img"
          style={{ width: "380px", borderRadius: "50%" }}
        />

        {/* Right Section - About Description */}
        <div className="landing--container-right">
          <div className="lcr--content" style={{ color: "#e0d9d9" }}>
            <h1>About Me</h1>
            <p> {parse(LandingData.para1)}</p>
            <p> {parse(LandingData.para2)}</p>
            <p>{parse(LandingData.para3)} </p>
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
