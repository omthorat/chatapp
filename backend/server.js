const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

const app = express();
dotenv.config;

app.get("/", (req, res) => {
  res.send("app started");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`api is running on port ${port}`));
