import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import JupiterNotebook from "./pages/JupiterNotebook.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/jupiter", component: JupiterNotebook },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
