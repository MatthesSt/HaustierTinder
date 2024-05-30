import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import ProfileSeeker from "./pages/profile_seeker/ProfileSeeker.vue";

const routes = [
  { path: "/register", component: Register },
  { path: "/profile-seeker", component: ProfileSeeker },
  { path: "/", component: Home },
  { path: "/swipe", component: Swipe },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
