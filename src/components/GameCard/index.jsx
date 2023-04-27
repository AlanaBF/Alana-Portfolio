import Card from "react-bootstrap/Card";
import "./gameCard.css"
// Card that gives an image of the project, the name and a description and the deployed link

function GameCard({ project }) {
  const { name, image, Github, deployedLink, about } = project;

  return (
    <Card className="game-card">
      <Card.Body className="gameCardBodyText">
        <Card.Title>
          <h4>
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <div className="game-card-image-position">
          <Card.Img
            className="game-card-image"
            variant="top"
            alt={name}
            src={image}/>
      </div>
        <Card.Text>
          <h5>{about}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body className="gameCardBodyLinks">
        <Card.Link>
            <h5 className="gameCardLink">
              <a href={deployedLink}>
                Play
              </a>
            </h5>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
