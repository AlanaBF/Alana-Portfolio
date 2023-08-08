import React from "react";
import "../../assets/styles/components.css";
import BadgeImage1 from "../../assets/images/introduction-to-cybersecurity.png"
import BadgeImage2 from "../../assets/images/agilepm-foundation.png"
import BadgeImage3 from "../../assets/images/agilepm-practitioner.2.png"

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <h2 className="sectionHeader">About Me</h2>
        <p className="aboutText">
          An adventurer at heart, I find my true solace amidst the vast ocean
          and its captivating wonders. Whether it's sailing through the endless
          waves, casting lines for a thrilling fishing experience, or diving
          into the depths to explore the hidden world below – the sea has always
          been my sanctuary. The turquoise paradise of the Maldives, with its
          tropical allure and graceful turtles, serves as my endless muse,
          inspiring every stroke of code in my portfolio.
        </p>
        <p className="aboutText">
          But life isn't just about marine escapades; it's an exploration of the
          boundless possibilities that lie beyond the horizon. My passion for
          life, travel, and the great outdoors drives me to break free from my
          comfort zone and embark on new learning journeys with every sunrise.
        </p>
        <p>
          As a former teacher turned Front End Developer, I've discovered a
          profound connection between teaching and coding – the power to shape,
          influence, and inspire. Armed with an insatiable thirst for knowledge,
          I eagerly delve into the depths of the Tech Sector, ready to unleash
          my highly transferable skills and bring a simple, clean, and elegant
          touch to the digital realm.
        </p>
        <p>
          In my journey, I've learned that leadership isn't just about leading
          from the front; it's about being a mentor, an effective planner, and
          an implementor of strategies that create harmony between daily
          demands. With every project, I seek the perfect balance, carefully
          crafting digital experiences that leave a lasting impression.
        </p>
        <p className="aboutText">
          But the journey doesn't end here. As I embark on the West Midlands
          Digital Academy and Early Career Path with Version 1, I'm delving deeper into the
          frontiers of innovation, conquering new horizons, and pushing the
          boundaries of my IT expertise. The pursuit of knowledge is an eternal
          voyage, and I'm steering full speed ahead, fueled by curiosity and the
          desire to redefine what's possible.
        </p>
        <p>
          Join me in this odyssey, as we sail the seas of creativity, dive into
          the depths of innovation, and together, craft a digital world like no
          other.
        </p>
        <h2 className="sectionHeader">Skills: Unleashing the Power of Tech</h2>
        <div className="skillTable">
        <div className="badgeContainer">
            <img
            className="badgeImage"
              src={BadgeImage1}
              width="100"
              height="100"
              alt="Credly Badge 1"
            />
        
            <img
            className="badgeImage"
              src={BadgeImage2}
              width="100"
              height="100"
              alt="Credly Badge 2"
            />
        
            <img
            className="badgeImage"
              src={BadgeImage3}
              width="100"
              height="100"
              alt="Credly Badge 3"
            />
          </div>
          <table>
          <tbody>
            <tr>
              <td>Project Management</td>
              <td>Prince2 Foundation and Practitioner, AgilePM Foundation and Practitioner</td>
            </tr>
            <tr>
              <td>Programming</td>
              <td>
                Embracing the ABCs of the digital realm – HTML, CSS, and
                JavaScript are the foundation of my coding canvas.
              </td>
            </tr>
            <tr>
              <td>Frameworks</td>
              <td>
                From breathing life into user interfaces with React.js to
                unleashing the power of servers with Node.js, I aim to deliver seamless experiences.
              </td>
            </tr>
            <tr>
              <td>Methodologies</td>
              <td>
                Agile, Scrum, and Kanban are the winds that propel my projects
                forward, allowing me to navigate complexities with ease and
                agility.
              </td>
            </tr>
            <tr>
              <td>Other</td>
              <td>
                In the ever-evolving tech universe, Git is my trusty tool,
                guiding me through version control, while APIs unlock
                gateways to boundless possibilities.
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
