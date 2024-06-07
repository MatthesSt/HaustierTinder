<script setup lang="ts">
import { ref } from 'vue';
import { addShelter, deleteShelter, getShelters, updateShelter } from '../shelter';
import { Shelter } from '../types';
import { getUsers } from '../user';

const shelters = ref(getShelters());
const currentShelter = ref<Shelter>({
  name: '',
  email: '',
  homepage: '',
  id: Math.random().toString().substring(2, 9),
  standort: '',
  telefonnummer: '',
  user_id: '',
  tiere: [],
});

function saveShelter() {
  if (shelters.value.find(sh => sh.id == currentShelter.value.id)) {
    updateShelter(currentShelter.value);
  } else {
    addShelter(currentShelter.value);
  }
  currentShelter.value = {
    name: '',
    email: '',
    homepage: '',
    id: Math.random().toString().substring(2, 9),
    standort: '',
    telefonnummer: '',
    user_id: '',
    tiere: [],
  };
  shelters.value = getShelters();
}
const users = ref(getUsers());

function editShelter(shelter: Shelter) {
  currentShelter.value = { ...shelter };
}
</script>
<template>
  <div class="container">
    <div class="card mb-3">
      <div class="card-body">
        <form @submit.prevent="saveShelter">
          <input type="text" class="form-control mb-2" placeholder="Name" v-model="currentShelter.name" />
          <input type="text" class="form-control mb-2" placeholder="E-Mail-Adresse" v-model="currentShelter.email" />
          <input type="text" class="form-control mb-2" placeholder="Homepage" v-model="currentShelter.homepage" />
          <input type="text" class="form-control mb-2" placeholder="Standort" v-model="currentShelter.standort" />
          <input type="text" class="form-control mb-2" placeholder="Telefonnummer" v-model="currentShelter.telefonnummer" />
          <select class="form-select" aria-label="Default select example" v-model="currentShelter.user_id">
            <option value="">Wähle einen Verwalter</option>
            <option v-for="user of users" :value="user.id">{{ user.username }}</option>
          </select>
          <div class="d-flex justify-content-end mt-2">
            <button class="btn btn-success">Speichern</button>
          </div>
        </form>
      </div>
    </div>
    <div style="max-height: calc(100vh - 60px - 60px - 350px); overflow: auto">
      <table class="table table-striped w-100">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Homepage</td>
            <td>Standort</td>
            <td>Telefon</td>
            <td>Admin</td>
            <td style="width: 0"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shelter in shelters">
            <td>{{ shelter.name }}</td>
            <td>{{ shelter.email }}</td>
            <td>{{ shelter.homepage }}</td>
            <td>{{ shelter.standort }}</td>
            <td>{{ shelter.telefonnummer }}</td>
            <td>{{ users.find(user => user.id === shelter.user_id)?.username }}</td>
            <td>
              <div class="d-flex">
                <button class="btn btn-primary me-2" @click.stop="editShelter(shelter)">
                  <i class="bi bi-pen"></i>
                </button>
                <button class="btn btn-danger" @click.stop="deleteShelter(shelter), (shelters = getShelters())">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
td {
  vertical-align: middle;
}
</style>
