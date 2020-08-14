import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Navigation } from "./navigation";
import { Clock } from "./clock";
import { Stopwatch } from "./stopwatch";
import { Timer } from "./timer";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/stopwatch">
          <Stopwatch />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/">
          <Clock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
