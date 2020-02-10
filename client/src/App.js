import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SingUp";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Blog from "./components/Blog";
import SignIn from "./components/SignIn/SingIn";


const App = () => (
  <Router>
    <Navbar />
    <Route path="/signIn" exact component={SignIn}></Route>
    <Route path="/signUp" exact component={SignUp}></Route>
    <Route path="/chat" exact component={Chat}></Route>
    <Route path="/blog" exact component={Blog}></Route>
  </Router>
);

export default App;