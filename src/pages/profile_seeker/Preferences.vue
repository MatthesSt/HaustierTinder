<template>
    <p>Wähle aus welche Tiere du suchen möchtest</p>
    <div class="container">
        <div class="row g-2">
            <div v-for="animal of animals" class="col-6">
                <div class="card" role="button" :class="{ 'bg-primary': animal.actice }"
                    @click="animal.actice = !animal.actice">
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

const animals = ref(getAnimals() || [
    { german: 'Hund', english: 'dog', actice: false },
    { german: 'Katze', english: 'cat', actice: false },
    { german: 'Pferd', english: 'horse', actice: false },
    { german: 'Kuh', english: 'cow', actice: false },
    { german: 'Schwein', english: 'pig', actice: false },
    { german: 'Huhn', english: 'chicken', actice: false },
    { german: 'Ente', english: 'duck', actice: false },
    { german: 'Gans', english: 'goose', actice: false },
    { german: 'Schaf', english: 'sheep', actice: false },
    { german: 'Ziege', english: 'goat', actice: false },
    { german: 'Kaninchen', english: 'rabbit', actice: false },
    { german: 'Frosch', english: 'frog', actice: false },
    { german: 'Spinne', english: 'spider', actice: false },
    { german: 'Käfer', english: 'beetle', actice: false },
    { german: 'Motte', english: 'moth', actice: false },
    { german: 'Kakerlake', english: 'cockroach', actice: false },
    { german: 'Heuschrecke', english: 'grasshopper', actice: false },
    { german: 'Ameisenbär', english: 'anteater', actice: false },
    { german: 'Eichhörnchen', english: 'squirrel', actice: false },
    { german: 'Bär', english: 'bear', actice: false },
    { german: 'Löwe', english: 'lion', actice: false },
    { german: 'Tiger', english: 'tiger', actice: false },
])
watch(animals, setAnimals, { deep: true });
function setAnimals() {
    localStorage.setItem('profile_seeker_animals', JSON.stringify(animals.value));
}
function getAnimals() {
    return JSON.parse(localStorage.getItem('profile_seeker_animals') || "false");
}

</script>
<style></style>