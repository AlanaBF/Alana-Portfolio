import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import { Container } from "react-bootstrap";
import "../../assets/styles/pages.css";
const Posts = () => {
  return (
    <Container>
      <div className="blogPageContainer">
        <Post5 />
      </div>
      <div className="blogPageContainer">
        <Post4 />
      </div>
      <div className="blogPageContainer">
        <Post3 />
      </div>
      <div className="blogPageContainer">
        <Post2 />
      </div>
      <div className="blogPageContainer">
        <Post1 />
      </div>
    </Container>
  );
};

export default Posts;
