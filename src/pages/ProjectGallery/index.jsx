import React from "react";
import portfolio from "../../portfolio.json";
import ProjectCard from "../../components/ProjectCard";
import "../../assets/styles/pages.css"

//Project gallery illustrating my work
function ProjectGallery() {
  return (
    <div className="galleryBackground">
      <h1 className="galleryPageTitle">Project Gallery</h1>
      <p className="galleryIntro">
        Here you can find examples of the Front End Development projects I have
        completed to date.
      </p>
      <div className="galleryPageCard">
        {portfolio.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
