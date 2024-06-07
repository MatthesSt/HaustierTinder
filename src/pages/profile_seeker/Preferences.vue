<template>
  <p>Wähle aus, welche Tiere du suchen möchtest.</p>
  <div class="container">
    <div class="row g-2" v-if="currentUser">
      <div v-for="animal of getUniqueAnimals()" class="col-6">
        <div class="card" role="button" :class="{ 'bg-primary': currentUser.preferences.includes(animal) }" @click="togglePreference(animal)">
          <div class="card-body">
            {{ animal }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getUniqueAnimals } from '../../shelter';
import { currentUser } from '../../user';

function togglePreference(animal: string) {
  if (!currentUser.value) return;
  if (currentUser.value.preferences.includes(animal)) {
    currentUser.value.preferences = currentUser.value.preferences.filter(a => a !== animal);
  } else {
    currentUser.value.preferences.push(animal);
  }
}
</script>
<style></style>
