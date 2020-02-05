const express = require("express");
const http = require("http");
const iosocket = require("socket.io");


const app = express();
const server = http.createServer(app);

const io = iosocket(server);

io.on('connection', (socket) => {
  console.log('We are new connection');
})
