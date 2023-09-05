import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../components/hooks/useFetching";
import PostService from "../API/PostServise";
import Loader from "../styles/UI/Loader/Loader";

const PostPage=()=>{
    const params = useParams();

    const [post,setPost]=useState({});
    const[comments,setComments]=useState([]);

    const [fetchPostById,isLoading,error]=useFetching(
    async(id)=>{
        const response= await PostService.getById(params.id)
        setPost(response.data);
    }
 )
 const [fetchComments,isComLoading,comError]=useFetching(
    async(id)=>{
        const response=await PostService.getCommentsByPosts(id)
        setComments(response.data);
    }
 )
/*
useEffect(()=>{
fetchPostById(params.id)
fetchComments(params.id)
},[])*/

    return(      
        <div>
 <h1>Post {params.id}</h1>
 {isLoading 
 ?<Loader/>
: <div>{post.id}.{post.title}</div>}

<h2>Comments</h2>

{isComLoading 
?<Loader/>
:<div>
    {comments.map(comm=>
    <div key={comm.id} style={{marginTop:15}}>
            <h3>{comm.email}</h3>
            <div>{comm.body}</div>
            
        </div>
    )}
    </div>
    }
        </div>
    )
}

export default PostPage;