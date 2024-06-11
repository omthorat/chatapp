import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../SignUp/SignUp";
import "./home.css";
const Home = () => {
  const [page, setPage] = useState("login");
  return (
    <div className="home">
      <div className="navbar">
        <div className="navigation">
          <Button colorScheme="blue" size="sm" onClick={() => setPage("login")}>
            Login
          </Button>
          <Button
            colorScheme="green"
            size="sm"
            onClick={() => setPage("signup")}>
            SignUp
          </Button>
        </div>
        {page === "login" && <LoginPage />}
        {page === "signup" && <SignUp />}
      </div>
    </div>
  );
};

export default Home;
