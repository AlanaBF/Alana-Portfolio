import React from "react";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

const bodyStyles = {
  flexGrow: 1,
};

const titleStyles = {
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function Article({ title, imageSrc, description, articleUrl }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card mediumCard" style={cardStyles}>
        <img src={imageSrc} className="card-img-top" alt="Article Thumbnail" />
        <div className="card-body" style={bodyStyles}>
          <h5 className="card-title" style={titleStyles}>
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={articleUrl}
            className="btn btn-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
