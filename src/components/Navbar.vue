<script setup lang="ts">
import router, { routes } from "../router";

let currentUser = localStorage.getItem("current_user");
function checkActive(route: any) {
    return eval(route.active || '');
}
function logoutUser() {
  localStorage.removeItem("current_user");
  currentUser = null;
  router.push("/");
  console.log("The logout was unsuccessful.")
}
</script>

<template>
    <div class="d-flex justify-content-between" v-if="currentUser">
      <div class="d-flex">
        <div v-for="route of routes.filter(route => checkActive(route))" class="me-2 fs-1">
            <router-link :to="route.path"><i :class="route.icon"></i></router-link>
        </div>
      </div>
      <button class="btn btn-danger" @click="logoutUser">
        <i class="bi bi-door-closed"></i>
      </button>
    </div>
</template>

<style>
.router-link-active {
    color: black;
}
</style>
