import { User } from './types';
import router from './router.ts';
import { ref, watch } from 'vue';
import { getShelter } from './shelter.ts';

export const currentUser = ref<User | null>(null);
loadCurrentUser();
getShelter();

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

export function addUser(user: User) {
  const users = getUsers();
  const errors = [];
  if (!user.username) errors.push('Der Benutzername darf nicht leer sein.');
  if (!user.email) errors.push('Die E-Mail-Adresse darf nicht leer sein.');
  if (!user.password) errors.push('Das Passwort darf nicht leer sein.');
  if (users.find(u => u.email == user.email)) errors.push('Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.');
  if (errors.length) return errors;

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  return [];
}

export function loginUser(email: string, password: string) {
  const user = getUsers().find(user => user.email == email && user.password == password);
  if (user) {
    localStorage.setItem('current_user', JSON.stringify(user));
    loadCurrentUser();
    router.push('/');
    console.log('The login was successful.');
    getShelter();
    return '';
  }
  console.log('no account with these credentials was found');
  return 'Es konnte kein Account mit diesen Anmeldedaten gefunden werden.';
}
function loadCurrentUser() {
  currentUser.value = JSON.parse(localStorage.getItem('current_user') || 'null');
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
  localStorage.removeItem('current_user');
  currentUser.value = null;
  router.push('/login');
  console.log('The logout was successful.');
}

export function updateUser(user: User) {
  const users = [...getUsers().filter(u => u.id != user.id), user];
  localStorage.setItem('users', JSON.stringify(users));
}
