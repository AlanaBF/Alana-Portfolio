import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import About from "../../components/About";
import "../../assets/styles/pages.css";


function Home() {
  return (
    <div className="page-background-home">
      <div>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
        <div >
          <h1 className="pageTitle">Alana Barrett-Frew</h1>
        </div>
        <div >
          <h2 className="home-subtitle">Front End Web Developer</h2>
        </div>
        <div className="aboutMePosition">
          <About />
      </div>
      </div>
    </div>
  );
}

export default Home;
