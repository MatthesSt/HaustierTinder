<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>
<template>
    <div class="d-flex justify-content-center align-items-center flex-column" style="height: 100vh">
        <a href="/" class="d-flex justify-content-center">
            <ApplicationLogo class="w-25" />
        </a>
        <div class="container">
            <slot />
        </div>
    </div>
</template>
