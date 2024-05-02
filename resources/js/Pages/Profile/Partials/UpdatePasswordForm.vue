<script setup>
import Input from "@/Components/Input.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const updatePassword = () => {
    form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset("password", "password_confirmation");
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset("current_password");
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <h2>Passwort zurücksetzen</h2>
    <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
        <div>
            <Input
                ref="currentPasswordInput"
                v-model="form.current_password"
                type="password"
                class="mt-2"
                autocomplete="current-password"
                placeholder="Aktuelles Passwort"
                :error="form.errors.current_password"
            />
        </div>

        <div>
            <Input
                id="password"
                ref="passwordInput"
                v-model="form.password"
                type="password"
                class="mt-2"
                autocomplete="new-password"
                placeholder="Neues Passwort"
                :error="form.errors.password"
            />
        </div>

        <div>
            <Input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                class="mt-2"
                autocomplete="new-password"
                placeholder="Neues Passwort bestätigen"
                :error="form.errors.password_confirmation"
            />
        </div>

        <div class="d-flex justify-content-end">
            <button class="btn btn-primary mt-2" :disabled="form.processing">
                speichern
            </button>
        </div>
    </form>
</template>
