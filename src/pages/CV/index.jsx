import React from "react";
import AlanaCV from './assets/Alana-Barrett-Frew-CV.pdf';
import Button from 'react-bootstrap/Button';
import "../../assets/styles/pages.css"

// CV page displays CV and has a link button to download CV
function CV() {
    return (
        <div className="cvBackground">
            <h1 className="cvPageTitle">CV</h1>
            <div className="button-position">
                <Button className="cvLinkButton"><a className="cvButtonText" href={AlanaCV}>Download a copy of my CV</a></Button>
            </div>
            <div className="cvframe">
                <iframe src={`${AlanaCV}#view=fitH`} title="AlanaCV" width="100%" height="1000" />
            </div>

        </div>
    )
}

export default CV;