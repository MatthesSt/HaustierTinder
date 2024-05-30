import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import ShelterAdministration from "./pages/ShelterAdministration.vue";

const routes = [
  { path: "/register", component: Register },
  { path: "/", component: Home },
  { path: "/swipe", component: Swipe },
  { path: "/shelter", component: ShelterAdministration },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
