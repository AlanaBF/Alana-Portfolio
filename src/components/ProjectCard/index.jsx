import React from "react";
import Card from "react-bootstrap/Card";
import "../../assets/styles/components.css";

function ProjectCard({ project }) {
  const { name, image, Github, deployedLink, about } = project;

  return (
    <Card className="galleryCard">
      <div className="cardImagePosition">
        <Card.Img
          className="cardImage"
          variant="top"
          alt={`Image for ${name}`}
          src={image}
          style={{ borderRadius: "0px" }}
        />
      </div>
      <Card.Body className="cardBodyText">
        <Card.Title>
          <h4 className="cardBodyTitle">
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <Card.Text className="galleryText">{about}</Card.Text>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        <Card.Link
          className="galleryCardLink"
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {deployedLink === "not deployed"
            ? "Backend Project"
            : "Deployed Web Page"}
        </Card.Link>

        <Card.Link
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className="galleryCardLink"
        >
          Github
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
