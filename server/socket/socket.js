

function onConnection(socket) {
  // console.log('We are new connection');






  socket.on('join', ({name, room}, callback) => {
    console.log(name, room);

    socket.join(room);
    socket.emit('notification', {name: 'admin', text: `${name} welcome to chat room ${room}`});

    callback();
  })

  socket.on('disconnect', () => {
    console.log('User had disconnect');
  });

  socket.on('sendMessage', (message, callback) => {
    this.emit('message', { text: message });
    callback();
  });
};


module.exports.onConnection = onConnection;