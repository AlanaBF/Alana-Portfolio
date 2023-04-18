import React from "react";
import profilePic from "../../assets/ProfilePic.jpeg";
import palmtree from "../../assets/palm-tree.jpeg";
import About from "../../components/About";
function Home() {
  return (
    <div className="page-background-home">
      <img className="image-home" src={palmtree} alt=""></img>
      <div>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
        <div className="home-title">
          <h1>Alana Barrett-Frew</h1>
        </div>
        <div className="home-subtitle">
          <h2>Front End Web Developer</h2>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
