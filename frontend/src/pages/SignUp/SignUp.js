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
import "./SignUp.css";
const SignUp = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signuppassword, setSignupPassword] = useState("");
  const handleLogin = () => {
    console.log(signupEmail, signuppassword);
  };
  return (
    <div className="signupPage">
      <div className="signupForm">
        <FormControl>
          <InputGroup className="loginInputGroup">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="email"
              className="signupInput"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
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
              className="signupInput"
              value={signuppassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Password"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>
          <div className="signupBottom">
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

export default SignUp;
