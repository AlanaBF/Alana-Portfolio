import React from "react";
import professional from "../../professional.json";
import ProjectCard from "../../components/ProjectCard";
import "../../assets/styles/pages.css"

//Project gallery illustrating my work
function ProfessionalProjects() {
  return (
    <div className="galleryBackground">
      <h1 className="galleryPageTitle">Professional Projects Gallery</h1>
      <p className="galleryIntro">
        Here you can find examples of the Front End Development projects I have
        completed to date.
      </p>
      <div className="galleryPageCard">
        {professional.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProfessionalProjects;