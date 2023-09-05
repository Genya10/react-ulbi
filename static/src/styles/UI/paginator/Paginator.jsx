import React from "react";
import { getPagesArray } from "../../../utils/pages";
import "./Paginator.css"

const Paginator=({totalPages,page,changePage})=>{
    let pagesArray=getPagesArray(totalPages);
    return(
        <div>
<div className="pageWrapper">
{pagesArray.map(p=>
  <span onClick={()=>changePage(p)}
  key={p}  className={page===p ? "page pageCurrent" : "page"}>{p}</span>
)}
</div>
        </div>
    )
}

export default Paginator;