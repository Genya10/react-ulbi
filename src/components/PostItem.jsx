import React from "react";
import cl from "../styles/PostItem.module.css";
import MyButton from "../styles/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem=(props)=>{

    const router= useNavigate();

    return(
        <div className={cl.post}>
            <div>
<strong>{props.post.id}.{props.post.title}</strong>   
  <div> {props.post.body}</div> 
</div>
<div>
<div className={cl.postBtn}>
<MyButton onClick={()=> router(`/posts/${props.post.id}`)}>Open</MyButton>
<MyButton onClick={()=> props.remove(props.post)}>Remove</MyButton>
</div>
</div>
        </div>
    )
}

export default PostItem;