import React, {Component} from "react";
import io from 'socket.io-client';

const Chat = () => {

  let socket;
  let ENDPOIND = "localhost:5000";


  socket = io(ENDPOIND);

  return(
    <div>
      <h2>Chat form</h2>
    </div>
  )
}

export default Chat;