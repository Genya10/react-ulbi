import React from "react";
import MyInput from "../styles/UI/input/MyInput";
import MySelect from "../styles/UI/select/MySelect";

const PostFilter=({filter,setFilter,selectedSort,sortPosts})=>{
    return(
        <div>
        <MyInput 
        value={filter.query} 
        onChange={e=>setFilter({...filter,query:e.target.value})}
         placeholder="Search..."/>
      <MySelect
      value={filter.sort}
      onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
      defaultValue="Sort"
      options={[
        {value:'title',name:'on name'},
        {value:'body',name:'on description'}
      ]}/>
      </div>
    )
}

export default PostFilter;