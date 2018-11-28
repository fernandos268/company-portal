import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { allUsers } from "../../Queries/queries";
import { withRouter, Link } from "react-router-dom";

import { Modal as Ant_Modal, Avatar as Ant_Avatar } from "antd";

import {
  Grid as SUI_Grid,
  Card as SUI_Card,
  Item as SUI_Item,
  List as SUI_List,
  Label as SUI_Label
} from "semantic-ui-react";

// IMPORT PLACEHOLDERS
import UsersPlaceHolder from "../PlaceHolders/UsersPlaceHolder";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleModalVisibility = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  displayUsers() {
    const data = this.props.data;

    if (data.loading) {
      return <UsersPlaceHolder />;
    } else {
      if (data.allUsers) {
        return data.allUsers.map(user => {
          return (
            <SUI_Grid.Column key={user.id}>
              <SUI_Card fluid link onClick={this.handleModalVisibility}>
                <SUI_Card.Content
                  style={{ background: "#f5f5f5" }}
                  header={`${user.firstName} ${user.lastName}`}
                />
                <SUI_Card.Content
                  description={
                    <SUI_Item.Group>
                      <SUI_Item>
                        <Ant_Avatar
                          size={64}
                          style={{ backgroundColor: "#f5f5f5" }}
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                        <SUI_Item.Content>
                          <SUI_Item.Description>
                            <SUI_List>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      <SUI_List.Icon color="grey" name="user" />
                                    </td>
                                    <td>{"Username:"}&nbsp;&nbsp;&nbsp;</td>
                                    <td>
                                      <SUI_List.Content>
                                        {user.username}
                                      </SUI_List.Content>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <SUI_List.Icon color="grey" name="tag" />
                                    </td>
                                    <td>{"Role:"}</td>
                                    <td>
                                      <SUI_List.Content>
                                        {user.role}
                                      </SUI_List.Content>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <SUI_List.Icon
                                        color="grey"
                                        name="mail"
                                        style={{
                                          overflowWrap: "break-word",
                                          wordWrap: "break-word"
                                        }}
                                      />
                                    </td>
                                    <td>{"Email:"}</td>
                                    <td>
                                      <SUI_List.Content
                                        style={{
                                          overflowWrap: "break-word",
                                          wordWrap: "break-word"
                                        }}
                                      >
                                        {user.email}
                                      </SUI_List.Content>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <SUI_List.Icon
                                        color="grey"
                                        name="calendar alternate outline"
                                      />
                                    </td>
                                    <td>{"Created:"}</td>
                                    <td>
                                      <SUI_List.Content>
                                        {new Date(
                                          user.createdAt
                                        ).toLocaleDateString()}
                                      </SUI_List.Content>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </SUI_List>
                          </SUI_Item.Description>
                          <SUI_Item.Extra />
                        </SUI_Item.Content>
                      </SUI_Item>
                    </SUI_Item.Group>
                  }
                />
                <SUI_Card.Content extra>
                  <SUI_Label
                    size="mini"
                    color={user.isActive ? "green" : "red"}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </SUI_Label>
                </SUI_Card.Content>
              </SUI_Card>
            </SUI_Grid.Column>
          );
        });
      }
    }
  }

  render() {
    return (
      <SUI_Grid stackable style={{ height: "98%", overflowY: "auto" }}>
        <SUI_Grid.Column>
          <SUI_Grid columns={4} stackable style={{ overflowY: "auto" }}>
            {this.displayUsers()}
            <Ant_Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Ant_Modal>
          </SUI_Grid>
        </SUI_Grid.Column>
      </SUI_Grid>
    );
  }
}

export default graphql(allUsers)(Users);
