import React from "react";
import portfolio from "../../portfolio.json";
import ProjectCard from "../../components/ProjectCard";
import "./projectGallery.css"
//Project gallery illustrating my work
function ProjectGallery() {
  return (
    <div className="galleryBackground">
      <h1 className="gallerytitle">Project Gallery</h1>
      <p className="intro">
        Here you can find examples of the Front End Development projects I have
        completed to date.
      </p>
      <div className="galleryCard">
        {portfolio.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
