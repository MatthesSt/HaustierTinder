<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Input from '@/Components/Input.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <Input
                    id="name"
                    type="text"
                    class="mt-1"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                    placeholder="Name"
                    :error="form.errors.name"
                />
            </div>

            <div class="mt-4">
                <Input
                    id="email"
                    type="email"
                    class="mt-1"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    placeholder="Email"
                    :error="form.errors.email"
                />
            </div>

            <div class="mt-4">
                <Input
                    id="password"
                    type="password"
                    class="mt-1"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                    placeholder="Passwort"
                    :error="form.errors.password"
                />
            </div>

            <div class="mt-4">
                <Input
                    id="password_confirmation"
                    type="password"
                    class="mt-1"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                    placeholder="Passwort bestätigen"
                    :error="form.errors.password_confirmation"
                />
            </div>

            <div class="d-flex justify-content-end mt-2">
                <a :href="route('login')" class="btn btn-secondary me-2">Du hast bereits einen Account?</a>

                <button class="btn btn-primary" :disabled="form.processing">Registrieren</button>
            </div>
        </form>
    </GuestLayout>
</template>
