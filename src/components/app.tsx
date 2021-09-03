import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Trainerdirectory} from "./trainerdirectory";
import {Trainer} from "./trainer";

import './../styles/trainerdirectory.css'

export default function App() {
  return (
    <div className="trainer-list-wrapper">
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/trainers/:id">
              <Trainer />
            </Route>
            <Route path="/">
              <Trainerdirectory />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}