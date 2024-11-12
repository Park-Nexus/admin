const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export function setAccessToken(accessToken: string) {
  return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setRefreshToken(refreshToken: string) {
  return localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}
