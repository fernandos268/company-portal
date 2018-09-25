import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Views/Pages/Login";
import Home from "./Views/Pages/Home";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphiql"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: "Fern",
      jwt: "tw424-wr-$%62-123fsdf",
      userType: "Admin"
    };
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>{this.state.isLoggedIn ? <Home /> : <Login />}</div>
      </ApolloProvider>
    );
  }
}
