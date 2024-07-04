import React, { useState,useEffect } from "react";
import { useHistory,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, ButtonGroup } from "@chakra-ui/react";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../SignUp/SignUp";
import "./home.css";
const Home = () => {
  const [page, setPage] = useState("login");
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // setUser(userInfo);

    if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);
  return (
    <div className="home">
          <div className="homenavbar">
          <div>
          <Navbar.Brand href="#home" className="d-flex">
            <img
              alt=""
              src="images/chatapp.jpg"
              width="60"
              // height="50"
              className="d-inline-block align-top"
            /><p className="header">Lamp Chat</p>
          </Navbar.Brand>
          </div>
         <div>
         <Nav className="navtopages">
            <Link to="/login" className="loginbtn">Login</Link>
            <Link to="/signup" className="signupbtn">Signup</Link>
          </Nav>
         </div>
          </div>
        <div className="homebackground">
          <img src="images/chatimg.jpg" className="chatimg" alt="chat img user"/>
        </div>
    </div>
  );
};

export default Home;
