// Updated Fancy Hero Landing Page with Socials on Right
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Landing.css";
import { socialsData } from "../../Data/socialsData";
import Manikumarreddy from "../../assets/resume/Manikumarreddy.pdf";
import { LandingData } from "../../Data/Landing";
import parse from "html-react-parser";

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        {/* Left: Headline and CTA */}
        <div className="landing-left">
          <p className="intro-text">Welcome to my site</p>
          <h1 className="gradient-text">
            Hi! I'm <span>Manikumar</span><br /> Java Backend Developer
          </h1>
          <p className="sub-text">{parse(LandingData.para1)}</p>
          <p className="sub-text">{parse(LandingData.para2)}</p>
          <p className="sub-text">{parse(LandingData.para3)}</p>

          <div className="button-group">
            <a
              href={Manikumarreddy}
              download="resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className="primary-btn">View Resume</button>
            </a>
            <button className="secondary-btn">Hire Me</button>
          </div>
        </div>

        {/* Right: Image and Social Icons */}
        <div className="landing-right">
          <div className="image-wrapper">
            <img
              src={LandingData.dp}
              alt="Manikumarreddy Gajjela"
              className="profile-img"
            />
          </div>

          {/* Socials now below the image */}
          <div className="social-icons-right">
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
                <FaInstagram className="landing--social" aria-label="Instagram" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
