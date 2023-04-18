import React from "react";
import Card from 'react-bootstrap/Card';

// Card that gives an image of the project, the name and a description and the deployed link

function ProjectCard({ project }) {
  const { name, image, Github, deployedLink, about } = project

  return (

    <Card className="card" >
      <div className="card-image-position">
      <Card.Img className="cardImg" variant="top" alt={name} src={image} /></div>
      <Card.Body className="cardBodyText" >
      <Card.Title><h4><strong>{name}</strong></h4></Card.Title>
        <Card.Text>
          <h5>{about}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        <Card.Link >{deployedLink === "not deployed" ? <h5>Backend Project</h5> : <h5><a href={deployedLink}>Deployed Web Page</a></h5>}</Card.Link>
        <Card.Link href="#"><h5><a href={Github}>Github</a></h5></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;