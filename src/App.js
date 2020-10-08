import React from "react";
import "./global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ListPage } from "./Pages/List";
import { DetailsPage } from "./Pages/Details";
import { LoginPage } from "./Pages/Login";
import { HomePage } from "./Pages/Home";

import { AuthProvider } from "./Contexts/Auth";
import { PrivateRoute } from "./Routes/Private";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/books/:id">
            <DetailsPage />
          </PrivateRoute>
          <PrivateRoute path="/books">
            <ListPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
