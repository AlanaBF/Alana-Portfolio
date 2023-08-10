import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import About from "../../components/About";
import "../../assets/styles/pages.css";

function Home() {
  return (
    <div className="pageBackgroundHome">
      <div>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
        <div>
          <h1 className="homePageTitle">Alana Barrett-Frew</h1>
        </div>
        <div>
          <h4 className="homeSubtitle">Associate Consultant</h4>
          <h5 className="homeSubtitle">Version 1</h5>
        </div>

        <div className="aboutMePosition">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
