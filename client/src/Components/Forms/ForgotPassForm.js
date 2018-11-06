import React, { Component, Fragment } from "react";

import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from "antd";
import {
  Image,
  Header,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Segment
} from "semantic-ui-react";

import Background from "../Design/Background";

const FormItem = Form.Item;

class ForgotPassword_Form extends Component {
  handleChangeRoute = event => {
    this.props.handleChangeRoute(event.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

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

    return (
      <Fragment>
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
            <Card>
              <br />
              <br />
              <br />
              <br />
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
                  {getFieldDecorator("remember", {
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
                        onClick={this.handleRoute}
                      >
                        Forgot password?
                      </a>
                    </Row>
                  </SUI_Grid.Column>
                  <SUI_Grid.Column>
                    <a
                      name="signup"
                      className="login-form-forgot"
                      onClick={this.handleRoute}
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

const SigninForm = Form.create()(ForgotPassword_Form);

export default SigninForm;
