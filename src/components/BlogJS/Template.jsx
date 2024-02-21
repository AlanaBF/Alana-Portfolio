import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";

const Post4 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="blogPageLayout">
        <Card className="blogCard">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="blogTitle"></Card.Title>
            <Card.Subtitle className="blogDate"></Card.Subtitle>
            <Card.Text className="blogText"></Card.Text>
            <Button className="blogReadMoreButton" variant="primary" onClick={handleShowModal}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Modal dialogClassName="custom-modal-dialog" show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="" alt="" className="modalImages" />
            <p>
              <em></em>
            </p>
            <blockquote>
              <p></p>
              <p></p>
            </blockquote>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Post4;