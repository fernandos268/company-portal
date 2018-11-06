import jwtDecode from "jwt-decode";
import localStorage from "localStorage";

export function isLoggedIn() {
  const token = getToken();
  return !!token && !isTokenExpired(token); // handwaiving here
}

export function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

export function setToken(token) {
  const rememberMe = jwtDecode(token).rememberMe;

  console.log(rememberMe);

  //   localStorage.setItem("cp-refreshToken", token);
}

export function getToken() {
  return localStorage.getItem("cp-refreshToken");
}

export function removeToken() {
  localStorage.removeItem("cp-refreshToken");
}

export function decodeToken() {
  return jwtDecode(localStorage.getItem("cp-refreshToken"));
}

export function isRememberMe() {
  const decodedToken = jwtDecode(localStorage.getItem("cp-refreshToken"));
  return decodedToken.rememberMe;
}
