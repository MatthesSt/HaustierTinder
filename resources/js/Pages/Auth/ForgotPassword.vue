<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Input from '@/Components/Input.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head title="Passwort zurücksetzen" />

        <div>
            <div>
                Passwort vergessen? Kein Problem. Geben Sie einfach Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen des
                Passworts, mit dem Sie ein neues Passwort wählen können.
            </div>
            <form @submit.prevent="submit">
                <Input
                    id="email"
                    type="email"
                    class="mt-2"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Email"
                    :error="form.errors.email"
                />
                <div class="d-flex justify-content-end mt-2">
                    <button class="btn btn-primary" :disabled="form.processing">Link an Email senden</button>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
