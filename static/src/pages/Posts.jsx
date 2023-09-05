import React, {  useEffect, useState } from 'react';
import cl from ".././styles/App.module.css";
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../styles/UI/MyModal/MyModal';
import MyButton from '../styles/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostServise';
import Loader from '../styles/UI/Loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Paginator from '../styles/UI/paginator/Paginator';

function Posts() {

  const [posts,setPosts]=useState([
    {id:1,title:"Javascript",body:"BDescription"},
    {id:2,title:"Davascript",body:"FDescription"},
    {id:3,title:"Kavascript",body:"MDescription"}
  ])
  const [filter,setFilter]=useState({sort:'', query:''});
  const [modal,setModal]=useState(false);
  const[limit,setLimit]=useState(10);
  const[page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);
 
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);
  const [fetchPosts,isPostsLoading,postError]=useFetching(async()=>{
      const response = await PostService.getAll(limit,page);
  setPosts(response.data)
 const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount,limit));
  })
  console.log(totalPages);

 /* useEffect(() => {
    fetchPosts()
}, [])*/

const createPost =(newPost)=>{
  setPosts([...posts,newPost]);
  setModal(false)
}

//Получаем post из дочернего элемента
const removePost=(post)=>{
  setPosts(posts.filter(p=>p.id !== post.id))
}

const changePage=(page)=>{
  setPage(page);
  fetchPosts(limit,page)
}

  return (
    <div className={cl.App}>
      <button onClick={fetchPosts}>Get Posts</button>
      <MyButton style={{marginTop:20}} onClick={()=> setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>      
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>     
      {postError && 
      <h1>Error ${postError}</h1>}
      {isPostsLoading
      ?<div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
        <Loader/></div>
      :<PostList remove={removePost}
   posts={sortedAndSearchedPosts} title="List posts 1" />  
}
  <Paginator page={page} 
  changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
