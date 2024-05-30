import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import ProfileSeeker from "./pages/profile_seeker/ProfileSeeker.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/profile-seeker", component: ProfileSeeker }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
