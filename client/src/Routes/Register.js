import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { registrationMutation } from "./../Queries/mutations";
import jwtDecode from "jwt-decode";
import { isLoggedIn } from "../Components/AuthHelper/AuthHelper";

import {
  Form,
  Icon,
  Input,
  Steps,
  Button,
  message,
  Checkbox,
  Row,
  Col,
  Card,
  Alert
} from "antd";
import {
  Image,
  Header,
  Message as SUI_Message,
  Icon as SUI_Icon,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Segment
} from "semantic-ui-react";

import { withRouter } from "react-router-dom";

import Background from "../Components/Design/Background";

import { throwError } from "rxjs";

const Step = Steps.Step;

const FormItem = Form.Item;

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      error: "",
      formItemSize: "large",
      formLayout: "horizontal",
      current: 0,
      validationErrors: [],
      confirmDirty: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.current === 2) {
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          const response = await this.props.registrationMutation({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              username: values.username,
              password: values.password,
              role: "default",
              isActive: false
            }
          });

          const { ok, errors } = response.data.createUser;
          if (ok) {
            message.success("This is a message of success");
            this.props.history.replace("/");
          } else {
            if (errors[0].path === "email") {
              this.setState({ error: "Email is already in use" });
            } else {
              this.setState({ error: "Something went wrong" });
            }
          }
        }
      });
    } else {
      this.next();
    }
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  componentWillMount() {
    if (isLoggedIn()) this.props.history.replace("/");
  }

  next = () => {
    if (this.state.current === 0) {
      const fields = ["firstName", "lastName"];
      this.props.form.validateFields(fields, async err => {
        if (!err) {
          const current = this.state.current + 1;
          this.setState({ current });
        }
      });
    } else if (this.state.current === 1) {
      const fields = ["username", "email", "password", "confirmPassword"];
      this.props.form.validateFields(fields, async err => {
        if (!err) {
          const current = this.state.current + 1;
          this.setState({ current });
        }
      });
    }
  };
  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.

    const { error, formLayout, formItemSize } = this.state;

    const { current } = this.state;

    const steps = [
      {
        title: "Personal"
      },
      {
        title: "Account"
      },
      {
        title: "Submit"
      }
    ];

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
          <Col xs={20} sm={18} md={16} lg={7} xl={6}>
            <Card
              title={
                <div>
                  <Button
                    type="primary"
                    ghost
                    onClick={e => {
                      this.props.history.replace("/Login");
                    }}
                  >
                    <Icon type="left" />
                    Go back
                  </Button>
                  <Header as="h3" color="grey" textAlign="right">
                    Registration
                  </Header>
                </div>
              }
              actions={[
                <div className="steps-action">
                  <Button.Group>
                    {this.state.current > 0 && (
                      <Button type="primary" ghost onClick={() => this.prev()}>
                        <Icon type="left" />
                        Back
                      </Button>
                    )}
                    {this.state.current < steps.length - 1 && (
                      <Button type="primary" ghost onClick={() => this.next()}>
                        Next
                        <Icon type="right" />
                      </Button>
                    )}
                  </Button.Group>
                </div>
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
              <div>
                <Steps size="small" current={current}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <div className="steps-content">
                  <Form onSubmit={this.handleSubmit}>
                    <div
                      style={{
                        display: this.state.current === 0 ? "block" : "none"
                      }}
                    >
                      <br />
                      <FormItem label="First Name">
                        {getFieldDecorator("firstName", {
                          rules: [
                            {
                              required: true,
                              message: "This field is required!"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            size={formItemSize}
                            placeholder="Enter your first name here"
                          />
                        )}
                      </FormItem>
                      <FormItem label="Last Name">
                        {getFieldDecorator("lastName", {
                          rules: [
                            {
                              required: true,
                              message: "This field is required!"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            size={formItemSize}
                            placeholder="Enter your last name here"
                          />
                        )}
                      </FormItem>
                    </div>

                    <div
                      style={{
                        display: this.state.current === 1 ? "block" : "none"
                      }}
                    >
                      <br />
                      <FormItem label="Username">
                        {getFieldDecorator("username", {
                          rules: [
                            {
                              required: true,
                              message: "This field is required!"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            size={formItemSize}
                            placeholder="Enter your username name here"
                          />
                        )}
                      </FormItem>
                      <FormItem label="Email Address" hasFeedback>
                        {getFieldDecorator("email", {
                          rules: [
                            {
                              type: "email",
                              message: "The input is not valid E-mail!"
                            },
                            {
                              required: true,
                              message: "This field is required!"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="mail" />}
                            size={formItemSize}
                            placeholder="Enter your email address here"
                          />
                        )}
                      </FormItem>
                      <FormItem label="Password" hasFeedback>
                        {getFieldDecorator("password", {
                          rules: [
                            {
                              required: true,
                              message: "This field is required!"
                            },
                            {
                              validator: this.validateToNextPassword
                            },
                            {
                              min: 6
                            },
                            {
                              max: 30
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Enter your password here"
                          />
                        )}
                      </FormItem>
                      <FormItem label="Confirm Password" hasFeedback>
                        {getFieldDecorator("confirmPassword", {
                          rules: [
                            {
                              required: true,
                              message: "Please confirm your password!"
                            },
                            {
                              validator: this.compareToFirstPassword
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            onBlur={this.handleConfirmBlur}
                            placeholder="Cofirm password"
                          />
                        )}
                      </FormItem>
                    </div>

                    <div
                      style={{
                        display: this.state.current === 2 ? "block" : "none"
                      }}
                    >
                      <br />
                      <Form.Item>
                        <Row type="flex" justify="end">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large"
                            block
                          >
                            <Icon type="check-circle" />
                            Submit
                          </Button>
                        </Row>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const Register = Form.create()(RegisterForm);

export default graphql(registrationMutation, { name: "registrationMutation" })(
  withRouter(Register)
);
