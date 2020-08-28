import React from "react";
import c from "./Post.module.css"; //c its classes object
const Post = (props) => {
  return (
    <div>
      <div className={c.item}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
        {props.message}
      </div>
      <div className={c.like}>
        <span>like</span>
        {props.like}
      </div>
    </div>
  );
};
export default Post;
