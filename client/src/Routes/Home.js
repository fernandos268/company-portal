import React, { Component, Fragment } from "react";

import { removeToken } from "../Components/AuthHelper/AuthHelper";

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleUserMenuClick = (e, { name }) => {
    message.info(name);
    console.log("click", e);
    if (e.key === "MenuItem-Signout") {
      removeToken();
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
      <Layout>
        <Layout style={{ height: "100vh", overflow: "hidden" }}>
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
                      size="large"
                      style={{
                        background: "transparent"
                      }}
                    >
                      <Menu.Item header />
                      <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                      />
                      <Menu.Item
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                      />
                      <Menu.Item
                        name="friends"
                        active={activeItem === "friends"}
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
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
