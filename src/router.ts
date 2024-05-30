import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/swipe", component: Swipe },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
