import { User } from "./types";

export function getUsers(): User[] {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users;
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}
