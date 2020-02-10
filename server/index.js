const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const iosocket = require("socket.io");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require("dotenv").config();

const config = require("./config");


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = iosocket(server);

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

app.use('/user', userRouter);


io.on('connection', (socket) => {
  console.log('We are new connection');

  socket.on('disconnect', () => {
    console.log('User had disconnect');
  });
});


server.listen(PORT, () => {
  console.log(`Server has be started: ${PORT}`);
});