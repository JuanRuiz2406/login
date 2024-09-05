export function decodeJWT(token) {
  const arrayToken = token.split('.');
  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  return tokenPayload;
}

export function getUserNameFromToken(token) {
  const JWTToken = decodeJWT(token);
  const userName = JWTToken?.name;
  return userName;
}
