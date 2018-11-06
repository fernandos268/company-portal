import React, { Component, Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, createNetworkInterface, graphql } from "react-apollo";
import { HttpLink } from "apollo-link";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/rootReducer";
import localStorage from "localStorage";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

//AESTHETICS COMPONENT
import Background from "./Components/Design/Background";

//AUTHENTICATION HELPER
import AuthService from "./Components/AuthHelper/AuthService";
import WithAuth from "./Components/AuthHelper/WithAuth";

// ROUTE COMPONENTS
import Home from "./Routes/Home";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3080/graphql"
});

const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null
    };
  }

  render() {
    console.log(this.props.tokenContent);
    return <Home />;
  }
}

export default WithAuth(App);
