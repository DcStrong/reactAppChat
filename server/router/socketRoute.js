

function onConnection(socket) {
  console.log('We are new connection');

  socket.on('sendMessage', (message, callback) => {
    this.emit('message', { text: message });
    console.log(message)
    callback();
  });


  socket.on('disconnect', () => {
    console.log('User had disconnect');
  });
};


module.exports.onConnection = onConnection;