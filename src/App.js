import React from "react";
import "./style.css";
import Nav from "./Nav";
import Custom from "./Custom";
import Order from "./Orders";
import Home from "./Home";
import Signup from "./Signup";
import Menu from "./Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav className="navigation" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Custom" component={Custom} />
          <Route path="/Order" component={Order} />
          <Route path="/Menu" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}
