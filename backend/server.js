const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const userChats= require("./routes/userChats");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("app started");
});


app.use("/api/user", userRoutes);
app.use("/api/chats",userChats)


app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`api is running on port ${port}`));
