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
          {!this.props.user.isAuth ? <Redirect to="/login" /> : <Chat/>}
        </Route>
        <Route path="/login" exact component={Login}/>
        <div>{this.props.user.email}</div>
      </BrowserRouter>
    )
  }
}

