import React from "react";
import "./global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ListPage } from "./Pages/List";
import { DetailsPage } from "./Pages/Details";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/books/:id">
          <DetailsPage />
        </Route>
        <Route path="/books">
          <ListPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
