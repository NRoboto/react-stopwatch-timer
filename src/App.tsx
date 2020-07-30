import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navigation } from "./navigation";
import { Clock } from "./clock";

function App() {
  return (
    <div>
      <Navigation />
      <Clock />
    </div>
  );
}

export default App;
