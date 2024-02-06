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