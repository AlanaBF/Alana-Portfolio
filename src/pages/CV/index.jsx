import React from "react";
import AlanaCV from './assets/Alana-Barrett-Frew-CV.pdf';
import Button from 'react-bootstrap/Button';
import "../../assets/styles/pages.css"

function CV() {
  return (
    <div className="cvBackground">
      <h1 className="pageTitle">CV</h1>
      <div className="buttonPosition">
        <Button className="cvLinkButton" href={AlanaCV} rel="noopener noreferrer" target="_blank">
          Download a copy of my CV
        </Button>
      </div>
      <div className="cvFrame">
        <iframe src={`${AlanaCV}#view=fitH`} title="AlanaCV" width="100%" height="1000" target="_blank" rel="noopener noreferrer"/>
      </div>
    </div>
  );
}

export default CV;