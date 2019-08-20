import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landingpage from "./Landingpage";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact";
import Gallery from "./Gallery";

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/team" component={Team} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    );
  }
}

export default Main;
