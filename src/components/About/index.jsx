import React from "react";
import "../../assets/styles/components.css";
import Copilot from "/GalleryImages/GitHubCopilotMedium.webp";
import AIMedium from "../../assets/AIMedium.webp";
import certificate from "../../assets/certificate.webp";
import Authentication from "/GalleryImages/AuthenticationMedium.webp";
import logo from "../../assets/teacherturnsturtle.png";
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
            As part of my transition and sharing my story I have also started to
            blog my journey of teacherturnsturtle{" "}
            <img width="50px" src={logo}></img>
          </p>
          <p>You can follow my journey here:</p>
          <div className="m-auto">
            <a
              href="https://www.instagram.com/teacherturnsturtle81/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/teacherturnsturtle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            To document my learning and journey I will create resources that
            help me but also will help others as well. I have started writing
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
          <div className="mediumArticles row">
            <div className="col-md-6">
              <div className="card mediumCard">
                <img src={AIMedium} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    My Thoughts and Relationship with AI and Technology
                  </h5>
                  <p className="card-text">
                    Having successfully transitioned from a career in teaching
                    to the world of tech and business, I’ve been captivated by
                    the staggering potential of artificial intelligence (AI) to
                    revolutionise our lives. This transition wasn’t merely a
                    change in profession — it was about understanding the
                    positive impact I could have in this new space.
                  </p>
                  <a
                    href="https://medium.com/version-1/my-thoughts-and-relationship-with-ai-and-technology-d03b223284f2"
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
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
                  <p className="card-text"></p>
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
            <div className="col-md-6">
              <div className="card mediumCard">
                <img src={Copilot} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Exploring GitHub Copilot: A Junior Developer's Journey
                  </h5>
                  <p className="card-text"></p>
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
            </div>

            <div className="col-md-6">
              <div className="card mediumCard">
                <img
                  src={certificate}
                  className="card-img-top mediumCardImage"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Unlocking Efficiency: Bulk Adding Names to Certificates with
                    Mail Merge in Word and PowerPoint
                  </h5>
                  <p className="card-text"></p>
                  <a
                    href="https://medium.com/version-1/unlocking-efficiency-bulk-adding-names-to-certificates-with-mail-merge-in-word-and-powerpoint-c49559bd9d4b"
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
