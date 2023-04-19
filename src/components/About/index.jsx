import React from "react";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="aboutMeCard">
      <Card>
        <Card.Header className="aboutMeHeader">About Me</Card.Header>
        <Card.Body>
          <Card.Text className="aboutMeText">
            Former Teacher turned Front End Developer, always learning and
            seeking new knowledge and skills. Very excited to bring highly
            transferable and relevant skillset into the Tech Sector. I value a
            simple and clean approach and don’t like to over complicate tasks. A
            leader, mentor, effective planner and implementor of organization
            strategies to balance day to day teaching requirements alongside
            extra curricular activities.
          </Card.Text>
       
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
