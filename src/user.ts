import { User } from "./types";
import router from "./router.ts";

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function addUser(user: User) {
  const users = getUsers();
  const errors = [];
  if (!user.username) errors.push("Der Benutzername darf nicht leer sein.");
  if (!user.email) errors.push("Die E-Mail-Adresse darf nicht leer sein.");
  if (!user.password) errors.push("Das Passwort darf nicht leer sein.");
  if (users.find(u => u.email == user.email))
    errors.push("Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.");
  if (errors.length) return errors;

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return [];
}

export function loginUser(email: string, password: string) {
  const user = getUsers().find(user => user.email == email && user.password == password);
  if (user) {
    localStorage.setItem("current_user", JSON.stringify(user));
    router.push("/");
    console.log("The login was unsuccessful.")
    return;
  }
  console.log("no account with these credentials was found");
}
