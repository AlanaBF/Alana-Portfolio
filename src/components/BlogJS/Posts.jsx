import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import { Container, Row,} from "react-bootstrap";
import "../../assets/styles/pages.css";
const Posts = () => {
  return (
    <Container className="blogPageContainer">
       
          <Post3 />
          <Post2 />
          <Post1 />
 
    </Container>
  );
};

export default Posts;
