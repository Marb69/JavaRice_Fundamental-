import React, { useEffect } from "react";
import { PostUser } from "../../api/PostUser";
import token from "../token/token";
import { fetchUser } from "../../api/GetUser";


const Login = async (username, password) => {
  if (!username == "" || !password == "") {
    try {
      const res = await PostUser(username, password);
      const token = res.data.token;
      
      localStorage.setItem('token',token);

     
      fetchUser()
      
    } catch (error) {
      console.log(error);
      debugger;
    }
  }



};

export default Login;
