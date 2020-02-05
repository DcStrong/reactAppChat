import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return(
      <nav>
        <Link to="/">Join</Link>
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    )
  }
}