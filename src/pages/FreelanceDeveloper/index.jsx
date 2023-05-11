import React from "react";
import "./freelanceDeveloper.css";
import image from "../../assets/images/web-logo.png";

function freelanceDeveloper() {
  return (
    <div className="page-background">
      <div className="comingsoondiv">
        <h1 className="comingsoontext">COMING SOON!</h1>
      </div>
      <div>
        <img className="web-image" variant="top" src={`${image}`} alt="" />
      </div>
      <div className="freelanceWhiteSection">
        <h2 className="freelanceAboutMe">About Me</h2>
        <p>
          Creating websites for small businesses and startups with user friendly
          design and engaging experiences for their clients.
        </p>
        <p>
          I am passionate about creating a well designed website that meets both
          the product owner and users needs. I will work with you throughout the
          consultation, design process and build to create something that will
          leave both you and your clients engaged and happy. Following
          successful completion and sign off of the website, I can also provide
          a 6 month support package to help with any potential issues or tweaks
          you may wish to make.
        </p>
      </div>
      <div className="freelanceColorSection">
        <h2>Services Available</h2>
        <p className="freelanceText">Website Build from scratch</p>
        <p className="freelanceText">Website redesign and update</p>
        <p className="freelanceText">Follow up support package</p>
        <p className="freelanceText">
          Every website design and build will be unique for every client so a
          bespoke package can also be arranged. Get in touch to discuss your
          needs further.
        </p>
      </div>
      <div className="freelanceDarkSection">
        <h3>Prices Available on Request</h3>
      </div>
    </div>
  );
}

export default freelanceDeveloper;
