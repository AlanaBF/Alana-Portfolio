import React from "react";
import BlogPost from "../../components/Blog";
import Search from "../../components/Search";
function Blog() {
  return (
    <div className="page-background">
      <div className="picture-section">
        <div className="picture">
          <h1>Blog</h1>
          <Search />
        </div>
      </div>
      <div>
        <p className="blogText">
          Welcome to my blog space. Join me on my journey as I take a massive
          leap into the unknown with a career change from Teacher to Front End
          Web Developer
        </p>
      </div>

      <BlogPost />
    </div>
  );
}

export default Blog;