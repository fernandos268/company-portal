import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addPost, togglePostForm } from "../../Actions/Actions";

import { Modal as Ant_Modal, Button as Ant_Button } from "antd";

import {
  Grid as SUI_Grid,
  Segment as SUI_Segment,
  Button as SUI_Button
} from "semantic-ui-react";

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post)),
    togglePostForm: () => dispatch(togglePostForm())
  };
};

const mapStateToProps = state => {
  return {
    isFormVisible: state.PostsReducer.isFormVisible
  };
};

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    };
  }

  toggleModal = e => {
    this.props.togglePostForm();
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.togglePostForm();

    const { title, content } = this.state;
    const id = uuidv1();
    this.props.addPost({ title, content, id });
    this.setState({ title: "", content: "" });
  };

  render() {
    const { title, content } = this.state;
    return (
      <>
        <SUI_Segment clearing basic>
          <SUI_Button floated="right" onClick={this.toggleModal}>
            New Post
          </SUI_Button>
        </SUI_Segment>
        <form onSubmit={this.handleSubmit}>
          <Ant_Modal
            centered
            maskClosable={false}
            title="Basic Modal"
            visible={this.props.isFormVisible}
            onOk={this.handleSubmit}
            onCancel={this.toggleModal}
            okText="Submit"
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="Content">Content</label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={this.handleChange}
              />
            </div>
          </Ant_Modal>
        </form>
      </>
    );
  }
}

const PostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default PostForm;
