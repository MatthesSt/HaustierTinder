import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import ShelterAdministration from "./pages/ShelterAdministration.vue";
import Login from "./pages/Login.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/swipe", component: Swipe, icon: "bi bi-house", active: "true" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/shelter", component: ShelterAdministration, icon: "bi bi-house-add", active: "currentUser.role == 'admin'" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
