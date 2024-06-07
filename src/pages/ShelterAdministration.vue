<script setup lang="ts">
import { ref } from "vue";
import { addShelter, getShelters } from "../shelter";
import { Shelter } from "../types";
import { getUsers } from "../user";

const shelters = ref(getShelters());
const newShelter = ref<Shelter>({
  name: "",
  email: "",
  homepage: "",
  id: Math.random().toString().substr(2, 9),
  standort: "",
  telefonnummer: "",
  user_id: "",
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
    user_id: "",
    tiere: [],
  };
  shelters.value = getShelters();
}
const users = ref(getUsers());
</script>
<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="saveShelter">
          <input type="text" class="form-control mb-2" placeholder="Name" v-model="newShelter.name" />
          <input type="text" class="form-control mb-2" placeholder="E-Mail-Adresse" v-model="newShelter.email" />
          <input type="text" class="form-control mb-2" placeholder="Homepage" v-model="newShelter.homepage" />
          <input type="text" class="form-control mb-2" placeholder="Standort" v-model="newShelter.standort" />
          <input type="text" class="form-control mb-2" placeholder="Telefonnummer" v-model="newShelter.telefonnummer" />
          <select class="form-select" aria-label="Default select example" v-model="newShelter.user_id">
            <option value="">Wähle einen Verwalter</option>
            <option v-for="user of users" :value="user.id">{{ user.username }}</option>
          </select>
          <div class="d-flex justify-content-end">
            <button class="btn btn-success">Erstellen</button>
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
