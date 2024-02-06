import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/styles/pages.css";
const Posts = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={8} className="mb-4 mt-4">
          <Post3 />
          <Post2 />
          <Post1 />
        </Col>
        <Col md={3} className="mt-4 float-right">
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Post3">
                    My 1st week as an Associate Consultant with Version 1.
                  </Link>{" "}
                 7/10/2023
                </li>{" "}
                <br></br>
                <li>
                  <Link to="/Post2">
                    Journey to Landing my First Job in Tech
                  </Link>{" "}
                  5/7/2023
                </li>
                <br />
                <li>
                  <Link to="/Post1">
                    A period of reflection and goal setting
                  </Link>{" "}
                  15/7/2023
                </li>
                <br />
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
