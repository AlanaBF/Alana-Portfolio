import React from "react";
import Post1 from "./Post1"; 
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import Post6 from "./Post6";
import Post7 from "./Post7";
import Post8 from "./Post8"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../assets/styles/pages.css";

const Posts = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10} className="mb-4 mt-4">
          <Row>
            {/* Cards for each post */}
            {[Post8, Post7, Post5, Post4, Post6, Post3, Post2, Post1].map((PostComponent, index) => (
              <Col xs={12} sm={6} md={4} key={index} className="mb-4">
                <PostComponent /> {/* Each post now contains its own card structure */}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
