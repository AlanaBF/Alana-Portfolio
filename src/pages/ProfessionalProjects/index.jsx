import React from "react";
import professional from "../../professional.json"; // Make sure the import path is correct
import ProfessionalProjectCard from "../../components/ProfessionalProjects";
import Testimonials from "../../components/Testimonials";
import "../../assets/styles/pages.css";
import Avatar1 from "../../components/Avatar";

function ProfessionalProjects() {
  return (
    <div className="galleryBackground">
      <h1 className="galleryPageTitle">Professional Gallery</h1>
      <Avatar1/>
      <p className="galleryIntro">
        Here you can find examples of the Front End Development projects I have completed to date.
      </p>
      <div className="galleryPageCard">
        {professional.map((project) => (
          <ProfessionalProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Testimonials/>
    </div>
  );
}

export default ProfessionalProjects;
