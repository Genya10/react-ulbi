import React, { useContext } from "react";
import { Routes,Route } from "react-router-dom";
import { Suspense } from "react";
import { privatRoutes,publicRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context/context";
import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import { useEffect } from "react";

const AppRouter=()=>{

  const {isAuth}=useContext(AuthContext);
  console.log(isAuth);

    return(
<div>
<Routes>
<Route path="/about" element={<About/>}/>
<Route exact path="/posts" element={ <Posts />}/>    
<Route exact path="/posts/:id" element={ <PostPage />}/>   
<Route path="*" element ={<h1>Error</h1>}/>
</Routes>
</div>
    )
}
export default AppRouter; 


{/*     isAuth 
      ? 
        <Routes>
{privatRoutes.map(route=>
  <Route 
  component={route.component}
   key={route.path}
   path={route.path}
    exact={route.exact}/>
)}
</Routes>
{/*<Navigate to="/posts/"/>*/}
   {/*}  </Suspense>
      :
      <Suspense>
        <Routes>
        {publicRoutes.map(route=>
  <Route 
  component={route.component}
   key={route.path}
   path={route.path}
    exact={route.exact}/>
)}  
        </Routes>
{/*<Navigate to="/login/"/>
      </Suspense>
*/}






