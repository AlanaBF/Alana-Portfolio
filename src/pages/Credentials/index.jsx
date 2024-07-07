import React from "react";
import profilePic from "../../assets/ProfilePic.jpeg";
import profileLogo from "../../assets/teacherturnsturtle.png";
import CareerTimeline from "../../assets/images/CareerTimeline.png";
import "../../assets/styles/pages.css";

function Credentials() {
  return (
    <div className="pageBackgroundCredentials">
      <div className="row credentialsRow justify-content-center align-items-center">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card credentialsCard1">
            <div className="card-body">
              <img
                src={profilePic}
                className="profilePic"
                alt="ABF profilePic"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="card credentialsCard text-center">
            <div className="card-body">
              <img src={profileLogo} alt="ABF profilePic" width={"30%"} />
              <h1>Alana Barrett-Frew</h1>
              <p>Associate Consultant</p>
              <p>Version 1</p>
              <p>Work Email: alana.barrettfrew@version1.com</p>
              <p>Personal Email: alanabarrett-frew@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row credentialsRow">
        <div className="col-sm-12">
          <div className="card credentialsCard">
            <div className="card-body">
              <h5 className="card-title">Professional Background</h5>
              <p className="card-text">
                Always learning and seeking new knowledge and skills. On a 21
                month Early careers pathway with Version 1. Working on exciting
                and innovative AI tech projects for good.{" "}
              </p>
              <p>
                In the past year, I have completed 3 Microsoft Certifications
                (AZ-900, AI-900 and AI-102) a 12 weeks Digital Skills Academy,
                an Udemy Full Stack Web Developer Course, a 16 week Skills
                Bootcamp in Front End Web Development, my Project Manager
                certifications, with recent Prince2 and AgilePM Foundation and
                Practitioner Certifications amongst numerous other courses and
                hands on learning and work on projects.{" "}
              </p>
              <p>
                Having worked within the Education Sector for nearly 20 years I
                have a proven track record of demonstrating leadership,
                effective planning and implementing organisation strategies to
                balance my day to day teaching requirements alongside extra
                curricular activities. I am very excited to bring my highly
                transferable and relevant skill set into the Tech Sector. I
                value a simple and clean approach and don't like to over
                complicate tasks.
              </p>
              <h5 className="card-title">Professional Skills</h5>
              <div className="row">
                <div className="col">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>GitHub</li>
                    <li>API's</li>
                    <li>Azure AI Services</li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Java+Springboot</li>
                    <li>Project Management</li>
                    <li>Docker</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row credentialsRow">
        <div className="col-sm-12">
          <div className="card credentialsCard">
            <div className="card-body">
              <h1>Certifications</h1>
              <ul>
                <li>
                  Microsoft Certified: Azure AI Engineer Associate - AI-102
                </li>
                <li>Microsoft Certified: Azure AI Fundamentals - AI-900</li>
                <li>Prince2 Foundation and Practitioner (Axelos)</li>
                <li>
                  AgilePM Foundation and Practitioner (APMG International)
                </li>
                <li>Azure Fundamentals - AZ-900</li>
                <li>
                  Trilogy Skills Bootcamp in Front-End web Development (Trilogy
                  Education Services)
                </li>
                <li>Docker Essentials: A Developer Introduction (IBM)</li>
                <li>SQL and Relational Databases 101 (IBM)</li>
                <li>
                  LFC131: Green Software for Practitioners (The Linux
                  Foundation)
                </li>
                <li>
                  Generative AI Overview for Project Managers (Project
                  Management Institute)
                </li>
                <li>Cyber Threat Management (Cisco)</li>
                <li>Introduction to Cybersecurity (Cisco)</li>
                <li>AWS Partner: Generative AI Essentials (Business)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row credentialsRow">
        <div className=" col-sm-12">
          <div className="card credentialsCard">
            <div className="card-body">
              <h1>Career Timeline</h1>
              <img
                className="careerTimelineImage"
                src={CareerTimeline}
                alt="Career Timeline"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;
