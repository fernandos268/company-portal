import { graphql } from "react-apollo";
import { loginMutation } from "../../Queries/mutations";
import jwtDecode from "jwt-decode";
import localStorage from "localStorage";

export default class AuthService {
  isLoggedIn() {
    // try {
    //   // Check if token exist in the browser's local storage
    //   const token = localStorage.getItem("cp-refreshToken");

    //   if (token) {
    //     // Check if token is expired

    //     if (jwtDecode(token).exp < Date.now() / 1000) {
    //       localStorage.removeItem("cp-refreshToken");
    //       localStorage.removeItem("cp-token");
    //       return "Token has expired";
    //     }

    //     return true;
    //   }
    //   return "Token does not exist";
    // } catch (error) {
    //   console.log(error);
    // }

    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired = token => {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  };

  setToken = idToken => {
    // Saves user token to localStorage
    localStorage.setItem("cp-refreshToken", idToken);
  };

  getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem("cp-refreshToken");
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("cp-refreshToken");
  };

  decodeToken = () => {
    return jwtDecode(localStorage.getItem("cp-refreshToken"));
  };
}
