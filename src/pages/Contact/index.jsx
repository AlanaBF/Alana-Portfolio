import React from "react";
import ContactMe from "../../components/ContactMe";
import AlanaWebCV from "./assets/Alana-Barrett-Frew-Web-Dev-CV.pdf";
import AlanaPMCV from "./assets/Alana-Barrett-Frew-PM-CV.pdf";
import "../../assets/styles/pages.css";
import logo from "../../assets/teacherturnsturtle.png"

//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="contactBackground">
      <h1 className="contactPageTitle" style={{color:"var(--aqua-blue)"}}>Contact Me</h1>
              <img
                src={logo}
                width={"20%"}
                style={{borderRadius:"100%"}}
                alt="ABF profileLogo"
              />
      <p className="contactText">
        If you want to get in contact please use the form below
        <br />
        or click on one of the links
        <br />
        or email me direct @:
        <br />
        alanabarrett-frew@hotmail.com
      </p>
      <span className="buttonGroup">
        <a href="https://github.com/AlanaBF" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"    ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
              href="https://www.instagram.com/teacherturnsturtle81/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/teacherturnsturtle"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa fa-facebook"></i>
            </a>
        
      </span>
      {/* <p>
        <a className="cv" href={AlanaWebCV} target="_blank" rel="noopener noreferrer">
          Web Developer CV
        </a>
      </p>
      <p>
        <a className="cv" href={AlanaPMCV} target="_blank" rel="noopener noreferrer">
          Project Management CV
        </a>
      </p> */}
      <div className="contactMeForm">
        <ContactMe />
      </div>
    </div>
  );
}

export default Contact;
