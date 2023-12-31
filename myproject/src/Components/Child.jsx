import React from "react";
import Mybutton from "../UI/button/Mybutton";
import { useNavigate } from "react-router-dom";


const Child = (props) => {
  const navigate = useNavigate();
  const dynamicNavigation = (id) => {
    navigate(`/posts/${id}`)
  }
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post_btns">
        <Mybutton onClick={() => props.remove(props.post)}>Delete</Mybutton>
        <Mybutton onClick={() => dynamicNavigation(props.post.id)}>Open</Mybutton>
      </div>
    </div>
  );
};

export default Child;
