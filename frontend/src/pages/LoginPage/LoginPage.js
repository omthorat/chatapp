import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import "./LoginPage.css";

const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(inputEmail, password);
  };
  return (
    <div className="loginPage">
      <div className="loginform">
        <FormControl>
          <InputGroup className="loginInputGroup">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="email"
              className="loginInput"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="Email Address"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>
          <InputGroup className="loginInputGroup">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>
          <div className="loginBottom">
            <Button
              className="loginBtn"
              colorScheme="gray"
              size="sm"
              onClick={() => handleLogin()}>
              Login
            </Button>
            <p className="newHere">
              New Here?<span style={{ color: "white" }}>SignUp</span>
            </p>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default LoginPage;
{
  /* {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )} */
}
