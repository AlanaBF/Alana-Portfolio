import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";

function PdfModal({ show, onHide, title, pdfUrl }) {
  // Simple check for mobile devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isMobile ? (
          <div>
            <p>PDF preview is not available on mobile. Please download the file to view it.</p>
            <Button style={{backgroundColor:"var(--dark-blue)", border:"none"}} href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</Button>
          </div>
        ) : (
          <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PdfModal;