import React from "react";
import {auth,provider} from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Button from '@mui/material/Button';
import "./Login.css";
import GoogleIcon from '@mui/icons-material/Google';
function Login({setUser})
{
    const signIn = ()=>{
     signInWithPopup(auth,provider).then((result)=>{
          console.log(result.user);
           setUser(result.user);
     })
     .catch((error)=>alert(error.message));
}  
   return(
        <div className="login">
            <img class="mainImg" alt="noimg"src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"/>
            <h1>Login</h1>
            <Button  className="button" onClick={signIn} >
                <GoogleIcon/> Sign in with Google
            </Button>
        </div>
   )
}
export default Login;
