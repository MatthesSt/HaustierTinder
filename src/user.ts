import { User } from "./types";
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
  if(getUsers().find(user => user.email == email && user.password == password){
        localStorage.setItem("current_user", JSON.stringify(user));
        router.push("/");
        console.log("The login was unsuccessful.")
        return;
  }
  console.log("no account with these credentials was found");
}
