import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import Voiceinator from "../../components/Voiceinator";
import SpeechDetector from "../../components/SpeechDetector.jsx";
import Timer from "../../components/Countdowns/index.jsx";
function Fun() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Fun Stuff</h1>
      </div>{" "}
      <div>
        <Timer />
      </div>
      <hr style={{ color: "white" }}></hr>
      <div className="googleSearchContainer">
        <GoogleSearch />
      </div>
      <hr></hr>
      <div className="speech-and-voice-div">
        <Voiceinator />
        <SpeechDetector />
      </div>
    </div>
  );
}

export default Fun;
