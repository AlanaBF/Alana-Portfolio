// import React from "react";
// import BlogPost from "../../components/Blog";
// import blog from "../../blog.json";
// import "../../assets/styles/pages.css";
// import nauticalTurtle from "../../assets/images/android-chrome-512x512.png";
// function Blog() {
//   return (
//     <div className="pageBackground">
//       <h1 className="blogPageTitle">Blog</h1>
// 

import React from "react";
import "../../assets/styles/pages.css"
import Posts from "../../components/BlogJS/Posts";

 
const BlogPage = () => {
    return (
        <div className="galleryBackground">
       <h1 className="blogPageTitle">Blog</h1>
            <Posts/>
        </div>
    );
};
 
export default BlogPage;