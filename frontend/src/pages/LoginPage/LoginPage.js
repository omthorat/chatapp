import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import "./LoginPage.css";

const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
              type={show ? "text" : "password"}
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              _placeholder={{ opacity: 1, color: "white" }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.5rem" size="xs" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
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
              New Here?
              <span style={{ color: "blue", cursor: "pointer" }}>SignUp</span>
            </p>
          </div>
          <Button
            className="guestBtn"
            colorScheme="gray"
            size="xs"
            onClick={() => {
              setInputEmail("guest123@gmail.com");
              setPassword("123456");
            }}>
            Guest
          </Button>
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
