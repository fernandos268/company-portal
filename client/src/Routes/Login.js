import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { loginMutation } from "./../Queries/mutations";
import jwtDecode from "jwt-decode";
import { isLoggedIn } from "../Components/AuthHelper/AuthHelper";

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

import Background from "../Components/Design/Background";

import { throwError } from "rxjs";

const FormItem = Form.Item;

class LoginForm extends Component {
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
        const response = await this.props.loginMutation({
          variables: values
        });

        const { ok, token, refreshToken, errors } = response.data.login;

        if (ok) {
          localStorage.setItem("cp-token", token);
          localStorage.setItem("cp-refreshToken", refreshToken);
          this.props.history.replace("/");
        } else {
          const err = {};
          errors.forEach(({ path, message }) => {
            err[`${path}Error`] = message;
          });

          this.errors = err;

          this.setState({ error: response.data.login.errors[0].message });
        }
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
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

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
          <Col xs={20} sm={18} md={16} lg={7} xl={5}>
            <Card
              title={
                <Header as="h3" color="grey" textAlign="left">
                  Login
                </Header>
              }
              headStyle={{}}
              actions={[
                <a
                  name="forgotpassword"
                  onClick={e => {
                    this.props.history.push("/ForgotPassword");
                  }}
                >
                  Forgot Password?
                </a>,
                <a
                  name="register"
                  onClick={e => {
                    this.props.history.push("/Register");
                  }}
                >
                  Create Account
                </a>
              ]}
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
                <FormItem>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Password!"
                      }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      placeholder="Password"
                      size="large"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("rememberMe", {
                    valuePropName: "checked",
                    initialValue: false
                  })(<Checkbox>Remember me</Checkbox>)}
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
                      Login
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

const Login = Form.create()(LoginForm);

export default graphql(loginMutation, { name: "loginMutation" })(
  withRouter(Login)
);
