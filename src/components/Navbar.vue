<script setup lang="ts">
import { routes } from "../router";

const currentUser = localStorage.getItem("current_user");
function checkActive(route: any) {
    return eval(route.active || '');
}
</script>

<template>
    <div class="d-flex" v-if="currentUser">
        <div v-for="route of routes.filter(route => checkActive(route))" class="me-2 fs-1">
            <router-link :to="route.path"><i :class="route.icon"></i></router-link>
        </div>
    </div>
</template>

<style>
.router-link-active {
    color: black;
}
</style>
