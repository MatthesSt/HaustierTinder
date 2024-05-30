import {User} from "./types";
import router from "./router.ts";

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function loginUser(email: string, password: string) {
  const users = getUsers();
  for(const user of users) {
    if(email === user.email) {
      if(password === user.password) {
        localStorage.setItem("current_user", JSON.stringify(user));
        router.push("/");
        return;
      }
      break;
    }
  }
  console.log("The login was unsuccessful.")
}
