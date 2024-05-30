<script setup lang="ts">
import { ref } from "vue";
import { addShelter, getShelters } from "../shelter";
import { Shelter } from "../types";

const shelters = ref(getShelters());
const newShelter = ref<Shelter>({
  name: "",
  email: "",
  homepage: "",
  id: Math.random().toString().substr(2, 9),
  standort: "",
  telefonnummer: "",
  tiere: [],
});

function saveShelter() {
  addShelter(newShelter.value);
  newShelter.value = {
    name: "",
    email: "",
    homepage: "",
    id: Math.random().toString().substr(2, 9),
    standort: "",
    telefonnummer: "",
    tiere: [],
  };
  shelters.value = getShelters();
}
</script>
<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="saveShelter">
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Name"
            v-model="newShelter.name"
          />
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Email"
            v-model="newShelter.email"
          />
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Homepage"
            v-model="newShelter.homepage"
          />
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Standort"
            v-model="newShelter.standort"
          />
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Telefonnummer"
            v-model="newShelter.telefonnummer"
          />
          <div class="d-flex justify-content-end">
            <button class="btn btn-success">Speichern</button>
          </div>
        </form>
      </div>
    </div>
    <div class="card mt-5" v-if="shelters.length > 0">
      <div class="card-body">
        <div v-for="shelter of shelters">{{ shelter }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
