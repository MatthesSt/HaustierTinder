<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { toRefs } from 'vue';

const props = withDefaults(defineProps<{}>(), {});
const {} = toRefs(props);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div>Dashboard</div>
    </AuthenticatedLayout>
</template>
