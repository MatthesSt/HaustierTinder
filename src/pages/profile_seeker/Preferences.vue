<template>
    <p>Wähle aus, welche Tiere du suchen möchtest.</p>
    <div class="container">
        <div class="row g-2">
            <div v-for="animal of currentUser.preferences" class="col-6">
                <div class="card" role="button" :class="{ 'bg-primary': animal.active }"
                    @click="animal.active = !animal.active">
                    <div class="card-body">
                        {{ animal.german }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const currentUser = ref(getCurrentUser())
watch(currentUser, setCurrentUser, { deep: true });

function setCurrentUser() {
    localStorage.setItem('current_user', JSON.stringify(currentUser.value));
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('current_user') || "false");
}

</script>
<style></style>
