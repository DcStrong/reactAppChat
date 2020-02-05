import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Blog from "./components/Blog";


const App = () => (
  <Router>
    <Navbar />
    <Route path="/" exact component={Join}></Route>
    <Route path="/chat" exact component={Chat}></Route>
    <Route path="/blog" exact component={Blog}></Route>
  </Router>
);

export default App;