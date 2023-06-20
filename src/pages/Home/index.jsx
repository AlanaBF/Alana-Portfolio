import React from "react";
import logo from "../../assets/images/businessLogo.jpeg";
import ContainerIntro from "../../components/Container";
import About from "../../components/About/index";
import "../../assets/styles/pages.css";

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Alana Barrett-Frew</h1>
        </div> 
        <About />
        <br/>
        <h2 className="sectionHeader">My Services</h2>
        <ContainerIntro />
      </div>
  );
}

export default Home;
