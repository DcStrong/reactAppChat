function onConnection(socket) {
  console.log('We are new connection');
  socket.on('disconnect', () => {
    console.log('User had disconnect');
  });
};


module.exports.onConnection = onConnection;