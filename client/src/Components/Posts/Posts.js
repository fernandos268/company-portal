import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostList from "./PostList";

import { togglePostForm } from "../../Actions/Actions";

import {
  Layout as Ant_Layout,
  Icon as Ant_Icon,
  Row as Ant_Row,
  Col as Ant_Col,
  Menu as Ant_Menu,
  Dropdown as Ant_Dropdown,
  Button as Ant_Button,
  message as Ant_Message,
  Modal as Ant_Modal
} from "antd";

import {
  Segment as SUI_Segment,
  Grid as SUI_Grid,
  Button as SUI_Button,
  Icon as SUI_Icon
} from "semantic-ui-react";

export default class Posts extends Component {
  render() {
    return (
      <>
        <SUI_Segment basic>
          <PostForm />
          <PostList />
        </SUI_Segment>
      </>
    );
  }
}
