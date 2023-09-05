import React from "react";
import MyInput from "../styles/UI/input/MyInput";
import MyButton from "../styles/UI/button/MyButton";
import { useState } from "react";

const PostForm = ({create})=>{
    const [post,setPost]=useState({title:'',body:''});
    const addNewPost=(e)=>{
        e.preventDefault();
      const newPost={
       ...post,id:Date.now()
      }
      create(newPost)
      setPost({title:'',body:''});  
      }
    return (
<div>
<form>
        <MyInput value={post.title} type="text" placeholder='name post'
          onChange={ e => setPost({...post,title:e.target.value}) } />  

        <MyInput value={post.body} type="text"  placeholder='description post'
          onChange={ e=> setPost({...post,body:e.target.value})}/>

        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
</div>
    )
}

export default PostForm;