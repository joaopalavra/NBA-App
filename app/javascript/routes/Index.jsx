import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Teams from "../components/Teams";
import Players from "../components/Players";
import Games from "../components/Games";
import Game from "../components/Game";
import TeamGames from "../components/TeamGames";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/teams" exact component={Teams} />
      <Route path="/players" exact component={Players} />
      <Route path="/games" exact component={Games} />
      <Route path="/games/:id" exact component={Game} />
      <Route path="/games/team/:id" exact component={TeamGames} />
    </Switch>
  </Router>
);