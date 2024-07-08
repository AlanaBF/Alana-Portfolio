import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";

function PdfModal({ show, onHide, title, pdfUrl }) {
  return (
    <Modal show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PdfModal;