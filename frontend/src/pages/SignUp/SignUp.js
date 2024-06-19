import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  position,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import "./SignUp.css";
import axios from "axios";
import { set } from "mongoose";
const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setpic] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const postDetails = (userpic) => {
    setLoading(true);
    if (userpic === undefined) {
      toast({
        title: "Please select image",
        description: "You've not selected Image.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (userpic.type === "image/jpeg" || userpic.type === "image/png") {
      const data = new FormData();
      data.append("file", userpic);
      data.append("upload_preset", "chatapp");
      data.append("cloud_name", "ddwxavl6b");
      fetch("https://api.cloudinary.com/v1_1/ddwxavl6b/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.secure_url);
          console.log(data.secure_url);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select image",
        description: "You've not selected Image.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };
  const handleSignup = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    console.log(name, email, password, confirmPassword, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        { config }
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <div className="signupPage">
      <div className="signupForm">
        <FormControl>
          <InputGroup className="signupInputGroup">
            <InputLeftElement pointerEvents="none">
              <Avatar size="xs" src="https://bit.ly/broken-link" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="text"
              className="signupInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User Name"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>

          <InputGroup className="signupInputGroup">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="email"
              className="signupInput"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email Address"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>
          <InputGroup className="signupInputGroup">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type={show ? "text" : "password"}
              className="signupInput"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              _placeholder={{ opacity: 1, color: "white" }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.5rem" size="xs" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup className="signupInputGroup">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="white" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type={show ? "text" : "password"}
              className="signupInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              _placeholder={{ opacity: 1, color: "white" }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.5rem" size="xs" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup className="signupInputGroup">
            <Input
              variant="unstyled"
              type="file"
              className="signupInput"
              onChange={(e) => postDetails(e.target.files[0])}
              placeholder="Profile Picture"
              _placeholder={{ opacity: 1, color: "white" }}
            />
          </InputGroup>
          <div className="signupBottom">
            <Button
              className="signupBtn"
              colorScheme="gray"
              size="sm"
              isLoading={loading}
              onClick={() => handleSignup()}>
              Register
            </Button>
            <p className="newHere">
              Already Register?
              <span style={{ color: "blue", cursor: "pointer" }}>Login</span>
            </p>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default SignUp;
