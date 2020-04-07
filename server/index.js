const express = require("express");
const cors = require("cors");
const http = require("http");

const socketio = require('socket.io');
require("dotenv").config();

const config = require("./config");


const app = express();
const server = http.createServer(app);

module.exports = server;

const PORT = process.env.PORT || 5000;
const io = socketio(server);

module.exports = io;



app.use(cors());
app.use(express.json());

const socketRoute = require('./socket/socket');
const userRouter = require("./router/user");
const chatRooms = require("./router/chatRoom");

app.use('/user', userRouter);
app.use('/chatRoom', chatRooms);

io.on('connection', socketRoute.onConnection.bind(io));

server.listen(PORT, () => {
  console.log(`Server has be started: ${PORT}`);
});
