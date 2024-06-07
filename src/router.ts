import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Swipe from "./pages/SwipePage.vue";
import Register from "./pages/Register.vue";
import ShelterAdministration from "./pages/ShelterAdministration.vue";
import Login from "./pages/Login.vue";
import ProfileSeeker from "./pages/profile_seeker/ProfileSeeker.vue";
import ProfileShelter from "./pages/profile_shelter/ProfileShelter.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/swipe", component: Swipe, icon: "bi bi-house", active: "true" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/shelter", component: ShelterAdministration, icon: "bi bi-house-add", active: "currentUser.role == 'admin'" },
  { path: "/profile-seeker", component: ProfileSeeker, icon: "bi bi-person", active: "true" },
  { path: "/profile-shelter", component: ProfileShelter, icon: "bi bi-person", active: "true" },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
