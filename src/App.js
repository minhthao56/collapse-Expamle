import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Devices from "./components/Devices/Devices";
import DetailDevices from "./components/Devices/DetailDevice/DetailDevice";

import "antd/dist/antd.css";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/devices/all">Devices</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/devices">
            <Devices />
          </Route>
          <Route exact path="/detail/device/:id">
            <DetailDevices />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
