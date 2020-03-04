import SignUp from "../SignUp/SingUp";
import SignOut from "../SignOut/SignOutContainer";
import Login from "../Login/Login"
import SignIn from "../SignIn/SignInContainer";
import NotFoundPage from "../notFound";
import Chat from "../Chat";
import Blog from "../Blog";

import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Blog}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/login" component={Login}/>
          <Route path="*/" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

