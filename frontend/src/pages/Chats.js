import React, { useEffect, useState } from "react";
import axios from "axios";
const Chats = () => {
  const [chats, setChats] = useState();
  const getchats = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
    console.log(data);
  };
  useEffect(() => {
    getchats();
  }, []);
  return (
    <div>
      {chats.map((c) => (
        <h1>{c.chatName}</h1>
      ))}
    </div>
  );
};

export default Chats;
