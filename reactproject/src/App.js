import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseconfig";

// you cant use anything from react-dom-router lib outside the route
// why Home is written in </> brackets
// const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); is used to see if the user is logged in or not
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };


  // we dont use navigate in Route related files. But Why?

  return (
    <Router>
      <nav>
        <Link to = "/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>) :
           (<>
              <Link to="/createpost"> Create Post </Link><button onClick={signUserOut}> LogOut</button>
            </>
        )}
      </nav>
      <Routes>
        <Route path = "/" element = {<Home isAuth={isAuth}/>} />  
        <Route path = "/createpost" element = {<CreatePost isAuth={isAuth}/>} />  
        <Route path = "/login" element = {<Login setIsAuth={setIsAuth} />} />  
      </Routes>
    </Router>
  );
}

export default App;
