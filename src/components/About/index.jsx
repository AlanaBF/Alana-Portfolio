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
          <h1>Welcome to My Portfolio</h1>
          <p className="about-text">
            As a former teacher turned Front End Developer, I've discovered a
            profound connection between teaching and coding – the power to
            shape, influence, and inspire. Armed with an insatiable thirst for
            knowledge, I'm excited to share my portfolio website showcasing my skills.
          </p>
          <p className="about-text">
            In my journey, I've learned that leadership isn't just about leading
            from the front; it's about being a mentor, an effective planner, and
            an implementor of strategies that create harmony between daily
            demands.
          </p>
          <p className="about-text">
            After completing a rigorous 16-week intensive bootcamp in Front End
            Web Development through the government-funded program with EdX
            Trilogy Skills, I have made a career change possible. This
            transformative journey has enabled me to discover a sector that
            I'm passionate about. The immersive experience provided
            by the bootcamp has not only equipped me with a robust skill set in
            web development but has also ignited a newfound enthusiasm for the
            tech industry. This leap signifies a significant personal and
            professional accomplishment, as I've successfully navigated a
            challenging learning path and emerged with the capabilities needed
            to excel. As I embark on this exciting
            trajectory, I'm excited to contribute my skills and creativity to
            the ever-evolving landscape of technology, harnessing my background
            in education to bring a unique perspective to my endeavors in the
            tech world.
          </p>
          <p className="about-text">
            But the journey doesn't end here. I have just completed the West
            Midlands Digital Skills Academy with Version 1.
          </p>
          <p className="about-text">
            This program has provided me with a diverse range of valuable skills
            and knowledge. I delved into the intricacies of Linux as an
            operating system, gaining a solid foundation in its mechanics and
            functionalities. The Agile Fundamentals module equipped me with
            an understanding of agile methodologies and their application in
            project management. With hands-on experience on GitHub, I honed
            my version control and collaboration skills, essential for modern
            development practices. The Storytelling for Business course
            taught me the art of conveying complex ideas effectively, vital for
            successful communication in professional settings. My venture into
            Cyber Security not only imparted insights into fortifying
            digital assets and privacy but also kindled a heightened
            awareness of potential threats. In the realm of Business Analysis,
            I learnt to decipher business needs and translate them into
            technical solutions. Additionally, my exposure to Azure deepened
            my understanding of cloud services. Cementing my knowledge with
            exams in Cyber Security and Azure AZ-900. 
          </p>
          <p>I have now started as a
            permanent member of the team as an Associate Consultant. My first
            project is allowing me to learn the Business Analyst and AI Engineer Roles in greater detail.</p>
          <p className="about-text">
            Ready to explore further? Check out my projects and get in touch!
          </p>

          <div className="link-to-projects">
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

        <h2 className="sectionHeader">Skills: Unleashing the Power of Tech</h2>
        <div className="skillTable">
          <div className="badgeContainer"></div>
          <table>
            <tbody>
              <tr>
                <td>Project Management</td>
                <td>Prince2 Foundation and Practitioner</td>
              </tr>
              <tr>
                <td>Project Management</td>
                <td>
                  AgilePM Foundation{" "}
                  <img
                    className="badgeImage"
                    src={BadgeImage2}
                    width="100"
                    height="100"
                    alt="Credly Badge 2"
                  />
                </td>
              </tr>
              <tr>
                <td>Project Management</td>
                <td>
                  AgilePM Practitioner
                  <img
                    className="badgeImage"
                    src={BadgeImage3}
                    width="100"
                    height="100"
                    alt="Credly Badge 3"
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>Programming</td>
                <td>HTML | CSS | JavaScript</td>
              </tr>
              <tr>
                <td>Frameworks</td>
                <td>React.js | Node.js</td>
              </tr>
              <tr>
                <td>Methodologies</td>
                <td>Agile | Scrum | Kanban</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>Git and API's</td>
              </tr>
              <tr>
                <td>Cyber Security</td>
                <td>
                  <img
                    className="badgeImage"
                    src={BadgeImage1}
                    width="100"
                    height="100"
                    alt="Credly Badge 1"
                  />

                  <img
                    className="badgeImage"
                    src={BadgeImage4}
                    width="100"
                    height="100"
                    alt="Credly Badge 4"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
