import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";

const routes = [
  { path: "/register", component: Register },
  { path: "/", component: Home },
  { path: "/swipe", component: Swipe },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
