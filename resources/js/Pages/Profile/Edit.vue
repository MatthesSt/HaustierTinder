<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Profile" />
    <AuthenticatedLayout>
        <UpdateProfileInformationForm />
        <UpdatePasswordForm />
        <div class="d-flex justify-content-end mt-2">
            <a class="btn btn-danger" :href="route('logout')">Abmelden</a>
        </div>
        <DeleteUserForm class="mt-2" />
    </AuthenticatedLayout>
</template>
