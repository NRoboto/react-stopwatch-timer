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
  Component: JSX.Element;
};
const routes: RouteElement[] = [
  { path: "/clock", Component: <Clock /> },
  { path: "/stopwatch", Component: <Stopwatch /> },
  { path: "/timer", Component: <Timer /> },
  { path: "/", Component: <Clock /> },
];

function App() {
  let location = useLocation();

  return (
    <>
      <Navigation />

      <TransitionGroup className="content">
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            {routes.map((route) => (
              <Route path={route.path}>{route.Component}</Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
