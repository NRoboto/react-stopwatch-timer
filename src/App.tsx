import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { RouteElement } from "./types";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navigation } from "./navigation";
import { Clock } from "./clock";
import { Stopwatch } from "./stopwatch";
import { Timer } from "./timer";

const routes: readonly RouteElement[] = [
  { path: "/stopwatch", Component: <Stopwatch /> },
  { path: "/timer", Component: <Timer /> },
  { path: "/clock", Component: <Clock /> },
];

const routeIndex = (path: string) =>
  routes.findIndex((route) => route.path === path);
const getSlideDirection = (path: string, prevPath: string) =>
  routeIndex(path) >= routeIndex(prevPath) ? "left" : "right";

function App() {
  let location = useLocation();
  let prevLocation = React.useRef(location);
  const slideDirection = getSlideDirection(
    location.pathname,
    prevLocation.current.pathname
  );

  React.useEffect(() => {
    prevLocation.current = location;
  });

  return (
    <>
      <Navigation />

      <TransitionGroup className={`main-content slide-${slideDirection}`}>
        <CSSTransition key={location.key} classNames={`slide`} timeout={300}>
          <Switch location={location}>
            {routes.map((route) => (
              <Route path={route.path}>{route.Component}</Route>
            ))}
            <Redirect to="/clock" /> // Any other pages redirect to clock
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
