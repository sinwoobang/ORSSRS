import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ORS from "./containers/ORS/ORS";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/ors">
            <ORS />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
