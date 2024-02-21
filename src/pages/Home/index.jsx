import React from "react";
import About from "../../components/About";
import "../../assets/styles/pages.css";
import UnityAvatar from "../../components/Avatar/UnityAvatar";

function Home() {
  return (
    <div className="pageBackgroundHome">
      <h1 className="pageTitle">Welcome to My Portfolio</h1>
      <div>
        <UnityAvatar />
        <div className="aboutMePosition">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
