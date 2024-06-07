<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { seed } from "./seeder";
onMounted(() => {
    seed();
});
</script>

<template>
    <Navbar></Navbar>
    <RouterView />
</template>

<style></style>
