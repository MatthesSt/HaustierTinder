<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div class="d-flex flex-column" style="height: 100vh">
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/dashboard">
                    <ApplicationLogo width="50"></ApplicationLogo>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-2">
                            <a
                                class="nav-link"
                                :class="{
                                    active: route().current('dashboard'),
                                }"
                                :href="route('dashboard')"
                            >
                                <i class="bi bi-house-fill" style="font-size: 2rem"></i>
                            </a>
                        </li>
                        <li class="nav-item mx-2">
                            <a
                                class="nav-link"
                                :class="{
                                    active: route().current('profile.edit'),
                                }"
                                :href="route('profile.edit')"
                            >
                                <i class="bi bi-person-fill" style="font-size: 2rem"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container bg-light p-2 rounded my-5 shadow" style="overflow-y: auto">
            <slot></slot>
        </div>
    </div>
</template>
