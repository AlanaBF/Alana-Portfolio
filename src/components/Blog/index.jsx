import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function BlogPost({ blogpost }) {
  const { name, image, date, postText, blogLink } = blogpost;
  return (
    <Card className="blog-card">
      <div>
        <Card.Img className="blog-image" variant="top" src={`${image}`} alt={name} />
      </div>
      <Card.Body>
        <Card.Title>
          <h1 className="blogTitle">Blog title: {name}</h1>{" "}
          <h1 className="blogDate">Date: {date}</h1>
        </Card.Title>
        <Card.Text>
          <h5>{postText}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link>
          <Button className="blogButton">
            <h5 className="blogLinkText">
              <a href={blogLink} className="blogLinkText">Blog Link</a>
            </h5>
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;
