import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { allUsers } from "../../Queries/queries";
import { withRouter, Link } from "react-router-dom";
import {
  Layout as Ant_Layout,
  Icon as Ant_Icon,
  Row as Ant_Row,
  Col as Ant_Col,
  Menu as Ant_Menu,
  Dropdown as Ant_Dropdown,
  Button as Ant_Button,
  message as Ant_Message,
  Table as Ant_Table,
  Badge as Ant_Badge
} from "antd";

import {
  Menu as SUI_Menu,
  Segment as SUI_Segment,
  Image as SUI_Image,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Dimmer as SUI_Dimmer,
  Loader as SUI_Loader,
  Icon as SUI_Icon,
  Item as SUI_Item,
  List as SUI_List,
  Placeholder
} from "semantic-ui-react";

// IMPORT PLACEHOLDERS
import UsersPlaceHolder from "../PlaceHolders/UsersPlaceHolder";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayUsers() {
    const data = this.props.data;

    if (data.loading) {
      for (let i = 0; i >= 9; i++) {
        return <UsersPlaceHolder />;
      }
    } else {
      return data.allUsers.map(user => {
        console.log(user.id);
        return (
          <SUI_Grid.Column>
            <SUI_Segment basic style={{ padding: "0px" }}>
              <SUI_Card fluid link key={user.id}>
                <SUI_Card.Content>
                  <SUI_Segment basic>
                    <SUI_Item.Group>
                      <SUI_Item>
                        <SUI_Item.Image
                          size="tiny"
                          src="https://react.semantic-ui.com/images/wireframe/image.png"
                        />
                        <SUI_Item.Content>
                          <SUI_Item.Header>{user.username}</SUI_Item.Header>
                          <SUI_Item.Meta>{`${user.firstName} ${
                            user.lastName
                          }`}</SUI_Item.Meta>
                          <SUI_Item.Description>
                            <SUI_List>
                              <SUI_List.Item>
                                <SUI_List.Icon name="user" />
                                <SUI_List.Content>
                                  {`Role: ${user.role}`}
                                </SUI_List.Content>
                              </SUI_List.Item>
                              <SUI_List.Item>
                                <SUI_List.Icon name="mail" />
                                <SUI_List.Content>
                                  {`Email: ${user.email}`}
                                </SUI_List.Content>
                              </SUI_List.Item>
                              <SUI_List.Item>
                                <SUI_List.Icon name="calendar alternate outline" />
                                <SUI_List.Content>
                                  {`Created : ${new Date(
                                    user.createdAt
                                  ).toLocaleDateString()}`}
                                </SUI_List.Content>
                              </SUI_List.Item>
                            </SUI_List>
                          </SUI_Item.Description>
                          <SUI_Item.Extra>
                            <Ant_Badge
                              status={user.isActive ? "success" : "error"}
                              text={user.isActive ? "Active" : "Inactive"}
                            />
                          </SUI_Item.Extra>
                        </SUI_Item.Content>
                      </SUI_Item>
                    </SUI_Item.Group>
                  </SUI_Segment>
                </SUI_Card.Content>
              </SUI_Card>
            </SUI_Segment>
          </SUI_Grid.Column>
        );
      });
    }
  }

  render() {
    return (
      <SUI_Grid stackable style={{ height: "98%", overflowY: "auto" }}>
        <SUI_Grid.Column>
          <SUI_Grid columns={4} stackable style={{ overflowY: "auto" }}>
            {this.displayUsers()}
          </SUI_Grid>
        </SUI_Grid.Column>
      </SUI_Grid>
    );
  }
}

export default graphql(allUsers)(Users);
