import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { removeToken } from "../AuthHelper/AuthHelper";
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

import CompanyLogo from "../../Images/CompanyLogo.png";
import ProfilePicture from "../../Images/fern-sample.jpg";

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => {
    if (name !== this.state.activeItem) {
      this.props.handleActiveItem(name);
      this.setState({ activeItem: name });
    }
  };

  handleUserMenuClick = e => {
    if (e.key === "MenuItem-Signout") {
      removeToken();
      this.props.history.replace("/login");
      message.success("Successfully logged out");
    }
  };

  render() {
    const { activeItem } = this.state;

    const { Header, Content, Footer, Sider } = Layout;

    const trigger = (
      <span>
        <Image avatar src={ProfilePicture} /> {this.props.tokenContent.username}
      </span>
    );

    const menu = (
      <Ant_Menu onClick={this.handleUserMenuClick}>
        <Ant_Menu.Item key="MenuItem-Profile" name="Opening Profile...">
          <Icon type="user" />
          Profile
        </Ant_Menu.Item>
        <Ant_Menu.Item key="MenuItem-Settings" name="Opening Settings...">
          <Icon type="setting" />
          Settings
        </Ant_Menu.Item>
        <Ant_Menu.Item key="MenuItem-Signout" name="Logging out...">
          <Icon type="logout" />
          Sign-out
        </Ant_Menu.Item>
      </Ant_Menu>
    );

    return (
      <Header
        style={{
          height: "auto",
          padding: "0%",
          background: "linear-gradient(to right, #009EFA,#00D2FC)"
        }}
      >
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column
              width={2}
              style={{
                padding: "0",
                background: "#ffff",
                overflow: "visible",
                transform: "skewX(35deg)"
              }}
            >
              <div
                style={{
                  left: "-10%",
                  transform: "skewX(-35deg)",
                  right: "-50%"
                }}
              >
                <Image src={CompanyLogo} size="tiny" centered />
              </div>
            </Grid.Column>
            <Grid.Column
              width={14}
              style={{
                padding: "0",
                background: "linear-gradient(to right, #009EFA,#00D2FC)",
                overflow: "visible",
                transform: "skewX(35deg)"
              }}
            >
              <Segment
                basic
                style={{
                  background: "transparent",
                  border: "0",
                  transform: "skewX(-35deg)"
                }}
              >
                <Menu
                  inverted
                  fluid
                  stackable
                  secondary
                  color="blue"
                  size="huge"
                  style={{
                    background: "transparent"
                  }}
                >
                  <Menu.Item header />
                  <Menu.Item
                    as={Link}
                    to="/home"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    as={Link}
                    to="/users"
                    name="users"
                    active={activeItem === "users"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    as={Link}
                    to="/posts"
                    name="posts"
                    active={activeItem === "posts"}
                    onClick={this.handleItemClick}
                  />

                  <Menu.Menu position="right">
                    <Menu.Item>
                      <Ant_Dropdown overlay={menu}>
                        <Dropdown trigger={trigger} icon={null} />
                      </Ant_Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Header>
    );
  }
}

export default withRouter(HeaderMenu);
