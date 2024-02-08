import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import CareerTimeline from "../../assets/images/CareerTimeline.png";
import "../../assets/styles/pages.css";

function Credentials() {
  return (
    <div className="pageBackgroundCredentials">
      <div className="row credentialsRow">
        <div className="col-sm-4">
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

        <div className="col-sm-8">
          <div className="card credentialsCard">
            <div className="card-body">
              <h1>Alana Barrett-Frew</h1>
              <h4>Associate Consultant</h4>
              <h4>Version 1</h4>
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
                Always learning and seeking new knowledge and skills. Recently
                completed a 12 week Digital Skills Academy leading into my
                current role as Associate Consultant with Version 1.{" "}
              </p>
              <p>
                In the past year, I have completed a 16 week Skills Bootcamp in
                Front End Web Development and my Project Manager certifications,
                with recent Prince2 and AgilePM Foundation and Practitioner
                Certifications.{" "}
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
                <li>Prince2 Foundation and Practitioner (Axelos)</li>
                <li>
                  AgilePM Foundation and Practitioner (APMG International)
                </li>
                <li>AZ-900 Azure Fundamentals</li>
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
