const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require("dotenv").config();

const config = require("./config");


const app = express();
const server = http.createServer(app);

module.exports = server;

const PORT = process.env.PORT || 5000;


app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);



app.use(cors());
app.use(express.json());

const dataBase = require("./databaseConnection");
const userRouter = require("./router/user");
const chatRouter = require("./router/chat");


app.use('/user', userRouter);
app.use('/chat', chatRouter);

const socket = require("./socket/index");

server.listen(PORT, () => {
  console.log(`Server has be started: ${PORT}`);
});
