import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return(
      <nav>
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/signIn">SignIn</Link>
          </li>
        </ul>
      </nav>
    )
  }
}