import Auth from "../Auth/Auth"
import NotFoundPage from "../notFound";
import Chat from "../Chat/Chat";
import Blog from "../Layout/Blog";
import Main from "../Layout/Main";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/login" component={Auth}/>
          <Route exact path="/main" component={Main}/>
          <Route path="*/" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

