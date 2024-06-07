import { User } from "./types";
import router from "./router.ts";
import { ref, watch } from "vue";

export const currentUser = ref<User | null>(null);
loadCurrentUser();

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function loginUser(email: string, password: string) {
  const user = getUsers().find(user => user.email == email && user.password == password);
  if (user) {
    localStorage.setItem("current_user", JSON.stringify(user));
    loadCurrentUser();
    router.push("/");
    console.log("The login was successful.")
    return;
  }
  console.log("no account with these credentials was found");
}
function loadCurrentUser() {
  currentUser.value = JSON.parse(localStorage.getItem("current_user") || "null");
}
watch(currentUser, setCurrentUser, { deep: true });

function setCurrentUser() {
  if (!currentUser.value) return;

  localStorage.setItem('current_user', JSON.stringify(currentUser.value));
  const users = getUsers();
  const index = users.findIndex(user => user.id == currentUser.value?.id);
  users[index] = currentUser.value;
  localStorage.setItem('users', JSON.stringify(users));

}
export function logoutUser() {
  localStorage.removeItem("current_user");
  currentUser.value = null;
  router.push("/login");
  console.log("The logout was successful.")
}