import React, { useContext } from "react";
import { AuthContext } from "../context/context";
import MyButton from "../styles/UI/button/MyButton";
import MyInput from "../styles/UI/input/MyInput";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.getItem("auth", "true");
  };
  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placholder="enter login" />
        <MyInput type="password" placholder="enter password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;
