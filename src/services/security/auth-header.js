
import { decrypt } from "./enc";

export default function authHeader() {
  let user = decrypt(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
