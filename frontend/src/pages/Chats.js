import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import LeftSlider from "../component/leftSlider/LeftSlider";
import UsersChat from "../component/userschat/UsersChat";
import ChatBox from "../component/chatbox/ChatBox";
import "./chats.css";
const Chats = () => {
  const { user } = ChatState();
  return (
    <>
      <div>
        {user && <LeftSlider />}
        <Box className="chatsPage">
          {user && <UsersChat />}
          {user && <ChatBox />}
        </Box>
      </div>
    </>
  );
};

export default Chats;
