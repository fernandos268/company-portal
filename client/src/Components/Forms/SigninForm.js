import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { loginMutation } from "../../Queries/mutations";
import jwtDecode from "jwt-decode";

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
  Grid as SUI_Grid,
  Card as SUI_Card,
  Segment
} from "semantic-ui-react";

import { Redirect, withRouter } from "react-router-dom";

import Background from "./../Design/Background";
import { throwError } from "rxjs";

const FormItem = Form.Item;

class Signin_Form extends Component {
  state = {
    redirectToReferrer: false,
    error: ""
  };

  handleChangeRoute = event => {
    this.props.handleChangeRoute(event.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // this.props
        //   .login({
        //     variables: {
        // email: values.email,
        // password: values.password,
        // rememberMe: values.rememberMe
        //     }
        //   })
        //   .then(response => {
        //     localStorage.setItem("CompOrg-jwt", response.data.login);
        //     this.props.loginSuccess_Callback(jwtDecode(response.data.login));
        //     this.props.form.resetFields();
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });

        const response = await this.props.login({
          variables: values
        });

        const { ok, token, refreshToken, errors } = response.data.login;

        if (ok) {
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          this.props.history.push("/");
          // console.log(jwtDecode(token));
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

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

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
      <Fragment>
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
            <Card style={{ boxShadow: "10px 20px 30px blue" }}>
              <br />

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
                      prefix={<Icon type="user" />}
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
                      Sign in
                    </Button>
                  </Row>
                </Form.Item>
              </Form>
              <Row type="flex" justify="center">
                <SUI_Grid
                  columns={2}
                  divided
                  stackable
                  centered
                  style={{ width: "100%" }}
                >
                  <SUI_Grid.Column>
                    <Row type="flex" justify="end">
                      <a
                        name="forgotpassword"
                        className="login-form-forgot"
                        onClick={this.handleChangeRoute}
                      >
                        Forgot password?
                      </a>
                    </Row>
                  </SUI_Grid.Column>
                  <SUI_Grid.Column>
                    <a
                      name="signup"
                      className="login-form-forgot"
                      onClick={this.handleChangeRoute}
                    >
                      Sign up
                    </a>
                  </SUI_Grid.Column>
                </SUI_Grid>
              </Row>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const SigninForm = Form.create()(Signin_Form);

export default graphql(loginMutation, { name: "loginMutation" })(
  withRouter(SigninForm)
);
