import React from "react";
import BlogPost from "../../components/Blog";
import blog from "../../blog.json";
import "../../assets/styles/pages.css";
import nauticalTurtle from "../../assets/images/android-chrome-512x512.png";
function Blog() {
  return (
    <div className="pageBackground">
      <h1 className="blogPageTitle">Blog</h1>
       <h1 className="deprecated">NO LONGER BEING UPDATED</h1>
          <h2 className="deprecated">
            Visit my Blog Page on my personal website
          </h2>
          <a
            href="https://nauticalturtle.com/#/BlogPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="deprecatedButton">
              <img className="deprecatedImage" width="50" src={nauticalTurtle}></img>
            <em>click here</em> </button>
          </a><div className="pictureSection">
        <div className="backgroundBlogPicture">
         
        </div>
      </div>
      <a
        href="https://newsletter-signup-ntrf.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="btn btn-lg btn-primary btn-block blogPageButton"
          type="button"
        >
          Signup to receive blog updates
        </button>
      </a>

      <p className="blogText">
        Welcome to my blog space. Join me on my journey as I take a massive leap
        into the unknown with a career change from Teacher to Front End Web
        Developer
      </p>

      <div className="blogCard">
        {blog.map((blogpost) => (
          <BlogPost key={blogpost.id} blogpost={blogpost} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
