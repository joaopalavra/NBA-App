import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Teams from "../components/Teams";
import Players from "../components/Players";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/teams" exact component={Teams} />
      <Route path="/players" exact component={Players} />
    </Switch>
  </Router>
);