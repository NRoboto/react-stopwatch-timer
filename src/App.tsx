import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Navigation } from "./navigation";
import { Clock } from "./clock";
import { Stopwatch } from "./stopwatch";
import { Timer } from "./timer";

type RouteElement = {
  path: string;
  component: JSX.Element;
};
const routes: RouteElement[] = [
  { path: "/clock", component: <Clock /> },
  { path: "/stopwatch", component: <Stopwatch /> },
  { path: "/timer", component: <Timer /> },
  { path: "/", component: <Clock /> },
];

function App() {
  let location = useLocation();

  return (
    <>
      <Navigation />

      <TransitionGroup className="content">
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
