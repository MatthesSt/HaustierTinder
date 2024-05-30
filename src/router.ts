import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import ShelterAdministration from "./pages/ShelterAdministration.vue";
import Login from "./pages/Login.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/swipe", component: Swipe },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/shelter", component: ShelterAdministration },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
