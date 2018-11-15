import React, { Component } from "react";
import {
  isLoggedIn,
  removeToken,
  decodeToken,
  isRememberMe
} from "./AuthHelper";
export default function WithAuth(AuthComponent) {
  return class AuthWrapped extends Component {
    constructor() {
      super();

      this.state = {
        tokenContent: null,
        isRememberMe: false
      };
    }
    componentWillMount() {
      if (!isLoggedIn()) {
        this.props.history.replace("/login");
      } else {
        try {
          const tokenContent = decodeToken();
          this.setState({
            tokenContent: tokenContent,
            rememberMe: tokenContent.rememberMe
          });
        } catch (err) {
          removeToken();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.tokenContent) {
        return (
          <AuthComponent
            {...this.props}
            history={this.props.history}
            tokenContent={this.state.tokenContent}
          />
        );
      } else {
        return null;
      }
    }
  };
}
