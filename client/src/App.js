// import React, { Component, Fragment } from "react";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider, createNetworkInterface, graphql } from "react-apollo";
// import { HttpLink } from "apollo-link";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./Reducers/rootReducer";
// import localStorage from "localStorage";
// import jwtDecode from "jwt-decode";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";

// //AUTHENTICATION HELPER
// import WithAuth from "./Components/AuthHelper/WithAuth";

// // ROUTE COMPONENTS
// import Home from "./Routes/Home";

// //apollo client setup
// const client = new ApolloClient({
//   uri: "http://localhost:3080/graphql"
// });

// const store = createStore(rootReducer);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuthenticated: false,
//       user: null
//     };
//   }

//   render() {
//     return <Home {...this.props} tokenContent={this.props.tokenContent} />;
//   }
// }

// export default WithAuth(App);

//-===============================================================================

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
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// UI Library Components
import {
  Layout,
  Icon,
  Row,
  Col,
  Menu as Ant_Menu,
  Dropdown as Ant_Dropdown,
  Button as Ant_Button,
  message
} from "antd";
import { Menu, Segment, Dropdown, Image, Grid, Card } from "semantic-ui-react";

//AUTHENTICATION HELPER
import WithAuth from "./Components/AuthHelper/WithAuth";
import { isLoggedIn, removeToken } from "./Components/AuthHelper/AuthHelper";
// ROUTE COMPONENTS
// import Home from "./Routes/Home";

// Layout Components
import HeaderMenu from "./Components/Dashboard/HeaderMenu";

// Container Components
import Dashboard from "./Components/Containers/Dashboard";
import Users from "./Components/Containers/Users";
import Posts from "./Components/Containers/Posts";

const { Header, Content, Footer, Sider } = Layout;

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3080/graphql"
});

const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.history.push("/Home/Dashboard");
  }

  handleLogout = () => {
    if (isLoggedIn()) {
      removeToken();
      this.props.history.replace("/Login");
      message.success("TESTING 123");
    }
  };

  render() {
    console.log(this.props);
    return (
      <Router>
        <Layout>
          <Layout style={{ height: "100vh", overflow: "hidden" }}>
            <HeaderMenu
              tokenContent={this.props.tokenContent}
              handleLogout={this.handleLogout}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <Segment
                style={{ padding: 24, background: "#fff", minHeight: 360 }}
              >
                <Switch>
                  <Route exact path="/Home/Dashboard" component={Dashboard} />
                  <Route exact path="/Home/Users" component={Users} />
                  <Route exact path="/Home/Posts" component={Posts} />
                </Switch>
              </Segment>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default WithAuth(App);
