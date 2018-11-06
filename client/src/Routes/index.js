import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" exact component={Register} />
      <Route path="/ForgotPassword" exact component={ForgotPassword} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </BrowserRouter>
);
