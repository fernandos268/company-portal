import React, { Component, Fragment } from "react";

import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from "antd";
import {
  Image,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Segment
} from "semantic-ui-react";

const FormItem = Form.Item;

class Signup_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    const emailError = isFieldTouched("email") && getFieldError("email");
    const userNameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

    return (
      <Fragment>
        <Row
          type="flex"
          justify="center"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 999
          }}
          align="middle"
        >
          <Col xs={20} sm={18} md={16} lg={14} xl={10}>
            <Card
              style={{
                padding: 0
              }}
              bodyStyle={{ padding: 0 }}
              bordered={false}
            >
              <Row style={{ overflow: "hidden" }}>
                <SUI_Grid stackable columns={2}>
                  <SUI_Grid.Column width={7}>
                    <Card>
                      <Row>
                        <Col>
                          <Form
                            onSubmit={this.handleSubmit}
                            className="login-form"
                          >
                            <FormItem>
                              {getFieldDecorator("email", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please provide an Email Adderss!"
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
                              {getFieldDecorator("username", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please provide a Username!"
                                  }
                                ]
                              })(
                                <Input
                                  prefix={<Icon type="username" />}
                                  placeholder="Username"
                                  size="large"
                                />
                              )}
                            </FormItem>
                            <FormItem>
                              {getFieldDecorator("password", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please provide a Password!"
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
                                initialValue: true
                              })(<Checkbox>Remember me</Checkbox>)}
                              <br />
                              <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                block
                                size="large"
                              >
                                Sign in
                              </Button>
                              <br />
                              <a className="login-form-forgot" href="">
                                Forgot password?
                              </a>
                            </FormItem>
                          </Form>
                        </Col>
                      </Row>
                    </Card>
                  </SUI_Grid.Column>
                  <SUI_Grid.Column
                    width={9}
                    style={{ overflow: "hidden", padding: 0 }}
                  >
                    <Row
                      type="flex"
                      justify="center"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        zIndex: 999
                      }}
                      align="middle"
                    >
                      <Button as="Link" path="/signup" size="large">
                        Sign up
                      </Button>
                    </Row>
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

const SignupForm = Form.create()(Signup_Form);

export default SignupForm;
