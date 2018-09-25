import React from "react";

import {
  Grid,
  Header,
  Image,
  Message,
  Container,
  Segment,
  Button as SUI_Button
} from "semantic-ui-react";

import { Form, Icon, Input, Button } from "antd";

// COMPANY LOGO
import CompanyLogo from "../../Images/CompanyLogo.png";

const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      jwt: "",
      error: false
    };
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
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
          columns="equal"
        >
          <Grid.Column />
          <Grid.Column width={7} style={{ padding: 0 }}>
            <Segment raised>
              <Grid stackable columns="equal">
                <Grid.Column width={7}>
                  <Container>
                    <Grid>
                      <Grid.Row centered>
                        <Grid.Column width={8}>
                          <Image src={CompanyLogo} size="small" />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                  <Container>
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
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            placeholder="Email Address"
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
                            prefix={
                              <Icon
                                type="lock"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        )}
                      </FormItem>
                      <Segment basic clearing>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                          style={{ float: "left" }}
                          size="large"
                        >
                          Sign in
                        </Button>

                        <a
                          className="login-form-forgot"
                          style={{ float: "right" }}
                          href=""
                        >
                          Forgot password?
                        </a>
                      </Segment>
                    </Form>
                  </Container>
                </Grid.Column>
                <Grid.Column
                  color="blue"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Segment textAlign="center" basic>
                    <h2>App Name</h2>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <br />
                    <Button ghost size="large">
                      Sign up
                    </Button>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </div>
    );
  }
}

const Login = Form.create()(LoginForm);

export default Login;
