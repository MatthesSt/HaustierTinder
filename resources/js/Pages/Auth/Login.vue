<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Input from '@/Components/Input.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: true,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />
        <form @submit.prevent="submit">
            <div>
                <Input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Email"
                    :error="form.errors.email"
                />
            </div>

            <div class="mt-4">
                <Input
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    placeholder="Passwort"
                    :error="form.errors.password"
                />
            </div>

            <div class="d-flex justify-content-end mt-2">
                <a class="btn btn-danger me-2" role="button" :href="route('password.request')">Passwort vergessen?</a>
                <a class="btn btn-secondary me-2" role="button" :href="route('register')">Kein Account? Registrieren</a>
                <button class="btn btn-primary" :disabled="form.processing">Einloggen</button>
            </div>
        </form>
    </GuestLayout>
</template>
