import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
// import Voiceinator from "../../components/Voiceinator";
// import SpeechDetector from "../../components/SpeechDetector.jsx";
import Timer from "../../components/Countdowns/index.jsx";
import Hobbies from "../../components/Hobbies";

function Fun() {
  return (
    <div className="pageBackgroundHome">
    <h1 className="pageTitle">For Fun</h1>
      <div className="col-md-8 text-center m-auto p-4">
        <Hobbies />
      </div>
      <div>
        <Timer />
      </div>
      {/* <hr style={{ color: "white" }}></hr> */}
      <div className="googleSearchContainer p-1">
        <GoogleSearch />
      </div>
      {/* <hr></hr> */}
      {/* <div className="speech-and-voice-div">
        <Voiceinator />
        <SpeechDetector />
      </div> */}
    </div>
  );
}

export default Fun;
