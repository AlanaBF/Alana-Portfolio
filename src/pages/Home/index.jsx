import React from "react";
import About from "../../components/About";
import "../../assets/styles/pages.css";
import UnityAvatar from "../../components/Avatar/UnityAvatar";
import Hobbies from "../../components/Hobbies";

function Home() {
  return (
    <div className="pageBackgroundHome">
      <h1 className="pageTitle">Welcome to My Portfolio</h1>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          <div className="col-md-6" style={{padding:"10px"}}>
            <UnityAvatar />
            <p className="about-text">This was a bit of fun. I wanted to create a playful theme and design an Avatar but I got stuck down a rabbit hole with Unity. Good fun and an avenue I might want to explore in the future.</p>
          </div>
        </div>
        <div className="aboutMePosition">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
