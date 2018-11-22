import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { loginMutation } from "../../Queries/mutations";
import jwtDecode from "jwt-decode";
import { isLoggedIn } from "../AuthHelper/AuthHelper";

import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Alert
} from "antd";
import {
  Image,
  Header,
  Icon as SUI_Icon,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Segment
} from "semantic-ui-react";

import { withRouter } from "react-router-dom";

import Background from "../Design/Background";

import { throwError } from "rxjs";

const FormItem = Form.Item;

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      error: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  componentWillMount() {
    if (isLoggedIn()) this.props.history.replace("/");
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched("email") && getFieldError("email");

    const { error } = this.state;

    return (
      <div>
        <Background />
        <Row
          type="flex"
          justify="center"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%"
          }}
          align="middle"
        >
          <Col xs={18} sm={14} md={16} lg={7} xl={5}>
            <Card
              title={
                <div>
                  <Button
                    type="primary"
                    ghost
                    onClick={e => {
                      this.props.history.replace("/");
                    }}
                  >
                    <Icon type="left" />
                    Go back
                  </Button>
                  <Header as="h3" color="grey" textAlign="right">
                    Forgot Password
                  </Header>
                </div>
              }
            >
              {error !== "" ? (
                <Alert
                  message="Error"
                  description={this.state.error}
                  type="error"
                  showIcon
                />
              ) : null}

              <br />
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Email Address!"
                      }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="mail" />}
                      placeholder="Email Address"
                      size="large"
                    />
                  )}
                </FormItem>

                <Form.Item>
                  <Row type="flex" justify="end">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                      block
                    >
                      Submit
                    </Button>
                  </Row>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const ForgotPassword = Form.create()(ForgotPasswordForm);

export default withRouter(ForgotPassword);
