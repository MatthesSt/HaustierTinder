<script setup>
import Input from "@/Components/Input.vue";
import { useForm, usePage } from "@inertiajs/vue3";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <section>
        <header>
            <h2>Profil Information</h2>
            <p>Aktualisiere deinen Namen und E-Mail Adresse.</p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))">
            <div>
                <Input
                    type="text"
                    class="mt-2"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                    placeholder="Name"
                    :error="form.errors.name"
                />
            </div>

            <div>
                <Input
                    type="email"
                    class="mt-2"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    placeholder="Email"
                    :error="form.errors.email"
                />
            </div>
            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-primary mt-2"
                    :disabled="form.processing"
                >
                    speichern
                </button>
            </div>
        </form>
    </section>
</template>
