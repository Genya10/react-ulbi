import React, { useContext } from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";

const Navbar =()=>{

    const {isAuth,setIsAuth}=useContext(AuthContext);

    const logout=()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return(
        <div className={cl.navbar}>
<MyButton onClick={logout}>
   Logout
</MyButton>
<div className={cl.navbarLinks}>
<Link to="/about">About site</Link>
<Link to="/posts">Posts</Link>
</div>
    </div>       
    )
}
export default Navbar;