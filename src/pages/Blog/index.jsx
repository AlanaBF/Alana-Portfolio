import React from "react";
import BlogPost from "../../components/Blog";
import blog from "../../blog.json";
import "./blog.css";
function Blog() {
  return (
    <div className="page-background">
      <div className="picture-section">
        <div className="picture">
          <h1>Blog</h1>
        </div>
      </div>
      <div>
        <a href="https://newsletter-signup-ntrf.onrender.com/">
          <button class="btn btn-lg btn-primary btn-block" type="button">
            Signup for new content
          </button>
        </a>
        <p className="blogText">
          Welcome to my blog space. Join me on my journey as I take a massive
          leap into the unknown with a career change from Teacher to Front End
          Web Developer
        </p>
      </div>

      <div className="blogCard">
        {blog.map((blogpost) => (
          <BlogPost key={blogpost.id} blogpost={blogpost} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
