<script setup>
import Modal from '@/Components/Modal.vue';
import Input from '@/Components/Input.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const confirmingUserDeletion = ref(false);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => {},
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <div class="d-flex justify-content-end">
        <Modal v-model="confirmingUserDeletion" @close="closeModal">
            <template #open>
                <button class="btn btn-danger ml-3" @click="confirmUserDeletion">Account löschen</button>
            </template>
            <div>
                <h2>Bist du sicher das du deinen Account löschen möchtest?</h2>

                <p class="mt-1">Sobald dein Account gelöscht wurde, sind alle deine Daten und Informationen unwiderruflich gelöscht.</p>

                <div class="mt-6">
                    <Input
                        v-model="form.password"
                        type="password"
                        class="mt-1"
                        placeholder="Passwort"
                        @keyup.enter="deleteUser"
                        :error="form.errors.password"
                    />
                </div>
            </div>
            <template #footer>
                <div>
                    <button class="btn btn-secondary me-2" @click="closeModal">Abbrechen</button>
                    <button class="btn btn-danger" :disabled="form.processing" @click="deleteUser">Account löschen</button>
                </div>
            </template>
        </Modal>
    </div>
</template>
