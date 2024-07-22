import React from "react";
import { Card, Button } from "react-bootstrap";

function PdfCard({ title, description, imageSrc, onClick }) {
  return (
    <div className="col-lg-3 col-md-4 mb-4 p-5 m-auto">
      <Card  className="d-flex flex-column h-100">
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button style={{backgroundColor:"var(--dark-blue)", border:"none"}} onClick={onClick}>View PDF</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PdfCard;