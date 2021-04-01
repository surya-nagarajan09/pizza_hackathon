import React from "react";
import "./style.css";
import Nav from "./Nav";
import Signin from "./Signin";
import Custom from "./Custom";
import Order from "./Orders";
import Home from "./Home";
import Signup from "./Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav className="navigation" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signin" component={Signin} />
           <Route path="/Signup" component={Signup} />
          <Route path="/Custom" component={Custom} />
          <Route path="/Order" component={Order} />
        </Switch>
      </div>
    </Router>
  );
}
