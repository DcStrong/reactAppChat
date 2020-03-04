const server = require("../index");
const iosocket = require("socket.io");

const io = iosocket(server);

io.on('connection', (socket) => {
  console.log('We are new connection');

  socket.on('disconnect', () => {
    console.log('User had disconnect');
  });
});
