import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ORS from "./containers/ORS/ORS";
import React from "react";

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
