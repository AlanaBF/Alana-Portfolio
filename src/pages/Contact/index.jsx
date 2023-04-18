import React from "react";
import ContactMe from "../../components/ContactMe";
import AlanaCV from "./assets/Alana-Barrett-Frew-CV.pdf";
import Button from "react-bootstrap/Button";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="page-background">
      <h1 className="contact">Contact Me</h1>
      <p className="contactText">
        If you want to get in contact please use the form below
        <br />
        or click on one of the links
        <br />
        or email me direct @:
        <br />
        alanabarrett-frew@hotmail.com
      </p>
      <span className="buttongroup">
        <a href="https://twitter.com/AlanaBF81">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://github.com/AlanaBF">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/alanabarrettfrew">
          <i className="fa fa-linkedin"></i>
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
