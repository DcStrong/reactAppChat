import React, {Component} from "react";
import SignOut from "./SignOut/SignOutContainer";
import io from 'socket.io-client';

let socket;
let ENDPOINT = "localhost:5000/chat";

export default class Chat extends Component {

  socket = io(ENDPOINT);

  render () {
    return (
      <div>
        <SignOut/>
        <h2>Chat form</h2>
      </div>
    )
  }
}