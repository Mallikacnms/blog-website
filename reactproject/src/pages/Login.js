import React from "react";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // to use history hook

// local storage set item if we want be logged in evenafter we change oor close tab

function Login({ setIsAuth }) {
    const handleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        window.location.href = "/"; // Redirect to the home page
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="loginPage">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={handleSignIn}>
          Sign in with Google
        </button>
      </div>
    );
  }
  
  export default Login;