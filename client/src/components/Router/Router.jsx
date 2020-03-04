import SignUp from "../SignUp/SingUp";
import SignOut from "../SignOut/SignOutContainer";
import Login from "../Login/Login"
import SignIn from "../SignIn/SignInContainer";
import Navbar from "../Navbar";
import Chat from "../Chat";
import Blog from "../Blog";

import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="*/">
          {!this.props.user.isAuth ? <Redirect to="/login" /> : <Route path="/" exact component={Blog}/>}
        </Route>
        <Route path="/chat" exact component={Chat}/>
        <div>{this.props.user.email}</div>
      </BrowserRouter>
    )
  }
}

