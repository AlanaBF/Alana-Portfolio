import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/components.css";
import BadgeImage1 from "../../assets/images/introduction-to-cybersecurity.png";
import BadgeImage2 from "../../assets/images/agilepm-foundation.png";
import BadgeImage3 from "../../assets/images/agilepm-practitioner.2.png";
import BadgeImage4 from "../../assets/images/cyber-threat-management.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <div className="portfolio-content">
          <p className="about-text">
            I am a former teacher turned Front End Developer. I took a massive leap of faith to leave teaching after 20 years and embark on a completely new chapter in my life!
          </p>
          <p className="about-text">
            After completing a rigorous 16-week intensive bootcamp in Front End
            Web Development through the government-funded program with EdX
            Trilogy Skills, I have made a career change possible. This
            transformative journey has enabled me to discover a sector that I'm
            passionate about.
          </p>
          <p className="about-text">
            More recently, I have completed the West Midlands Digital Skills
            Academy with Version 1. This program has provided me with a diverse
            range of valuable skills and knowledge. 
          </p>
          <p>
            I have now started as a permanent member of the team as an Associate
            Consultant. My first project is allowing me to learn the Business
            Analyst and AI Engineer Roles in greater detail. As I embark on this
            exciting trajectory, I'm excited to contribute my skills and
            creativity to the ever-evolving landscape of technology, harnessing
            my background in education to bring a unique perspective to my
            endeavors in the tech world.
          </p>
          <p className="about-text">
            Ready to explore further? Check out my site!
          </p>
          <div className="link-to-projects">
            {/* Link to Credentials Page */}
            <Button
              className="linkToCredentials"
              as={Link}
              to="Credentials"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credentials
            </Button>
            {/* Link to Blog Page */}
            <Button
              className="linkToBlog"
              as={Link}
              to="Blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Button>
            {/* Link to Projects Pages */}
            <Button
              className="linkToProject"
              as={Link}
              to="ProfessionalProjects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professional Projects
            </Button>
            <Button
              className="linkToProject"
              as={Link}
              to="CollaborativeProjects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collaborative Projects
            </Button>
            <Button
              className="linkToProject"
              as={Link}
              to="ProjectGallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal Projects
            </Button>
            <Button
              className="linkToProject"
              as={Link}
              to="/GamesGallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Games Projects
            </Button>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default About;
