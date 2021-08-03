import React from "react";
import "./Post.css";

const Post = ({author, content, image, date}) => {
    return (
        <div className = "post">
            <img className = "author-photo" src = {author.photo} />
            <div className = "article">
                <div>
                    <span className = "author-name"> {author.name} </span>
                    <span className = "author-nickname"> {author.nickname} </span>
                    <span className = "date"> {date} </span>
                </div>
                <div className = "post-text"> {content} </div>
                <img className = "post-photo" src = {image} />
            </div>
        </div>
    )
};

export default Post;