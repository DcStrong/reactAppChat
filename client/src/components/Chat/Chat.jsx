import React, {Component} from "react";
import io from 'socket.io-client';
import Message from './Message';

let socket;
// let ENDPOIND = "localhost:5000";
export default class Chat extends Component {

  // socket = io(ENDPOIND);

  render () {
    return (
      <div>
        <h2>Chat form</h2>
        <Message/>
      </div>
    )
  }
}
