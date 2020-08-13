import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navigation } from "./navigation";
import { Clock } from "./clock";
import { Stopwatch } from "./stopwatch";
import { Timer } from "./timer";

function App() {
  return (
    <div>
      <Navigation />
      <Clock />
      <Stopwatch />
      <Timer />
    </div>
  );
}

export default App;
