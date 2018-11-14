import jwtDecode from "jwt-decode";
import localStorage from "localStorage";
import sessionstorage from "sessionstorage";

export function isLoggedIn() {
  const token = getToken();
  return !!token && !isTokenExpired(token); // handwaving here
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

export function getToken() {
  const token =
    localStorage.getItem("cp-refreshToken") ||
    sessionstorage.getItem("cp-refreshToken");
  return token;
}

export function removeToken() {
  // Remove from localStorage
  localStorage.removeItem("cp-token");
  localStorage.removeItem("cp-refreshToken");
  // Remove from sessionStorage
  sessionstorage.removeItem("cp-token");
  sessionstorage.removeItem("cp-refreshToken");
}

export function decodeToken() {
  const token =
    localStorage.getItem("cp-refreshToken") ||
    sessionstorage.getItem("cp-refreshToken");
  return jwtDecode(token);
}
