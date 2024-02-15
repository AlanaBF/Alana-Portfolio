import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import Voiceinator from "../../components/Voiceinator";
import SpeechDetector from "../../components/SpeechDetector.jsx";
import Timer from "../../components/Countdowns/index.jsx";
import Avatar1 from "../../components/Avatar/index.jsx";

function Fun() {
  return (
    <div className="pageBackgroundHome">
      <div>
        <h1 className="pageTitle">Fun Stuff</h1>
        <Avatar1/>
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
