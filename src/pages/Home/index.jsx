import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import About from "../../components/About";
import "../../assets/styles/pages.css";
import BadgeImage1 from "../../assets/images/introduction-to-cybersecurity.png"
import BadgeImage2 from "../../assets/images/agilepm-foundation.png"
import BadgeImage3 from "../../assets/images/agilepm-practitioner.2.png"
function Home() {
  return (
    <div className="pageBackgroundHome">
      <div>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
        <div>
          <h1 className="homePageTitle">Alana Barrett-Frew Portfolio</h1>
        </div>
        <div>
          <h2 className="homeSubtitle">Associate Consultant</h2>
          <h2 className="homeSubtitle">Version 1</h2>
        </div>
      
        <div className="aboutMePosition">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
