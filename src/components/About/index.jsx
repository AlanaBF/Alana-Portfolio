import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/components.css";
import Copilot from "/GalleryImages/GitHubCopilotMedium.webp";
import Authentication from "/GalleryImages/AuthenticationMedium.webp";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <div className="portfolio-content">
          <p className="about-text">
            I am a former teacher turned Front End Developer. I took a massive
            leap of faith to leave teaching after 20 years and embark on a
            completely new chapter in my life!
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
          <p>
            To document my learning and journey I will create resources that help
            me but also will help others as well. I have started writing
            articles for Medium as well as my Blog Spot.
          </p>
          <a
            href="https://medium.com/@alana.barrettfrew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="btn btn-warning">
              Follow me on Medium @alana.barrettfrew
            </p>
          </a>
          <div className="mediumArticles">
            <div className="card mediumCard">
              <img src={Copilot} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Exploring GitHub Copilot: A Junior Developer's Journey
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://medium.com/version-1/exploring-github-copilot-1c4919069c7f"
                  className="btn btn-warning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>

            <div className="card mediumCard">
              <img
                src={Authentication}
                className="card-img-top mediumCardImage"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Implementing Auth0 User Authentication in a Vite-React-App
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://medium.com/version-1/implementing-auth0-user-authentication-in-a-vite-react-app-4091099bd086"
                  className="btn btn-warning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
          <p className="about-text">
            Ready to explore further? Check out my site!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
