import "./styles.css";
// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import VisaRequirements from "./components/VisaRequirements";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/visa-requirements" component={VisaRequirements} />
          {/* Add routes for Contact and Newsletter components */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import About from "./components/About";
