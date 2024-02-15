import React from "react";
import "../../assets/styles/pages.css"
import Posts from "../../components/BlogJS/Posts";
import Avatar1 from "../../components/Avatar";

 
const BlogPage = () => {
    return (
        <div className="galleryBackground">
       <h1 className="blogPageTitle">Blog Spot</h1>
       <Avatar1/>
            <Posts/>
        </div>
    );
};
 
export default BlogPage;