import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import About from "../../components/About";
import "../../assets/styles/pages.css";
import Avatar1 from "../../components/Avatar";

function Home() {
  return (
    <div className="pageBackgroundHome">
      <h1 className="pageTitle">Welcome to My Portfolio</h1>
      <div>
      <Avatar1/>
        <div className="aboutMePosition">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
