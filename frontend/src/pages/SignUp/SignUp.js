import React, { useState } from "react";
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
import { useToast } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import "./SignUp.css";
import { set } from "mongoose";
const SignUp = () => {
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signuppassword, setSignupPassword] = useState("");
  const [userImg, setUserImg] = useState("");
  const[loading,setLoading]=useState(false)
  const toast = useToast()
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const postDetails = (userpic) => {
    setLoading(true)
    if(userpic===undefined){
      toast({
        title: 'Please select image',
        description: "You've not selected Image.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"top"
      })
      return;
    }
    if(userpic.type==='image/jpeg' || userpic.type==='image/png' ){
      const data = new FormData
    data.append("file",userpic)
    data.append("upload_preset","chatapp")
    data.append("cloud_name","ddwxavl6b")
    fetch("https://api.cloudinary.com/v1_1/ddwxavl6b/image/upload",{
      method:"POST",
      body:data
    }).then((res)=>res.json()).then((data)=>{setUserImg(data.secure_url);
      console.log(data.secure_url);
      setLoading(false)
    }).catch((error)=>{console.log(error);
      setLoading(false)
    })
    }else{
      toast({
        title: 'Please select image',
        description: "You've not selected Image.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"top"
      })
      setLoading(false)

    }
    
  };
  const handlesignup=()=>{}
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
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
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
              value={signuppassword}
              onChange={(e) => setSignupPassword(e.target.value)}
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
              onClick={() => handlesignup()}>
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
