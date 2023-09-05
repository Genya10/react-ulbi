import React from "react";
import cl from "./MyButton.module.css"

const MyButton =(props)=>{
    return (
        <button {...props} className={cl.myBtn}>
{props.children}
        </button>
    )
}

export default MyButton;