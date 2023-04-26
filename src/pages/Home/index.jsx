import React from "react";
import profilePic from "../../assets/ProfilePic.jpeg";
import About from "../../components/About";
import "./home.css";

function Home() {
  return (
    <div className="page-background-home">
      <div>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
        <div >
          <h1 className="home-title">Alana Barrett-Frew</h1>
        </div>
        <div >
          <h2 className="home-subtitle">Front End Web Developer</h2>
        </div>
        <div className="aboutMePosition">
          <About />
      </div>
      </div>
      <hr/>
     
    </div>
  );
}

export default Home;
