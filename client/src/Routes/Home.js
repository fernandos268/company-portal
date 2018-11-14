import React, { Component, Fragment } from "react";
import {
  withRouter,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { removeToken } from "../Components/AuthHelper/AuthHelper";

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

import CompanyLogo from "../Images/CompanyLogo.png";
import ProfilePicture from "../Images/fern-sample.jpg";

// Layout Components
import HeaderMenu from "../Components/Dashboard/HeaderMenu";

// Route Components
import Users from "./Users";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleActiveItem = Item => {
    this.setState({ activeItem: Item });
  };

  render() {
    const { Header, Content, Footer, Sider } = Layout;

    return (
      <Layout>
        <Layout style={{ height: "100vh", overflow: "hidden" }}>
          <HeaderMenu
            tokenContent={this.props.tokenContent}
            handleActiveItem={this.handleActiveItem}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Router>
                <Switch>
                  <Route path="/users" component={Users} />
                  <Route render={() => <h1>DEFAULT COMPONENT RENDERED</h1>} />
                </Switch>
              </Router>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home);
