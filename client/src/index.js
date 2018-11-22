import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloProvider, createNetworkInterface, graphql } from "react-apollo";
// CSS Libraries
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

// Import Main styles for this application
import "./scss/style.css";

import Login from "./Components/UserAccount/Login";
import Register from "./Components/UserAccount/Register";
import ForgotPassword from "./Components/UserAccount/ForgotPassword";

import App from "./App";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3080/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Home" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
