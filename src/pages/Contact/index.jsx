import React from "react";
import ContactMe from "../../components/ContactMe";
import AlanaCV from "./assets/Alana-Barrett-Frew-CV.pdf";
import "../../assets/styles/pages.css";

//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="contactBackground">
      <h1 className="pageTitle">Contact Me</h1>
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
        <a href="https://twitter.com/AlanaBF81" aria-label="Twitter">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/AlanaBF" aria-label="GitHub">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </span>
      <h1>
        <a className="cv" href={AlanaCV}>
          My CV
        </a>
      </h1>
      <div className="contactMeForm">
        <ContactMe />
      </div>
    </div>
  );
}

export default Contact;
