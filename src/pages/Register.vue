<script setup lang="ts">
import { ref } from "vue";
import { addUser, loginUser } from "../user";
import { User } from "../types";
import router from "../router";

const errors = ref<string[]>([]);

const newUser = ref<User>({
  id: Math.random().toString().substr(2, 9),
  username: "",
  password: "",
  email: "",
  role: "user",
  preferences: [
    { german: 'Hund', english: 'dog', active: false },
    { german: 'Katze', english: 'cat', active: false },
    { german: 'Pferd', english: 'horse', active: false },
    { german: 'Kuh', english: 'cow', active: false },
    { german: 'Schwein', english: 'pig', active: false },
    { german: 'Huhn', english: 'chicken', active: false },
    { german: 'Ente', english: 'duck', active: false },
    { german: 'Gans', english: 'goose', active: false },
    { german: 'Schaf', english: 'sheep', active: false },
    { german: 'Ziege', english: 'goat', active: false },
    { german: 'Kaninchen', english: 'rabbit', active: false },
    { german: 'Frosch', english: 'frog', active: false },
    { german: 'Spinne', english: 'spider', active: false },
    { german: 'Käfer', english: 'beetle', active: false },
    { german: 'Motte', english: 'moth', active: false },
    { german: 'Kakerlake', english: 'cockroach', active: false },
    { german: 'Heuschrecke', english: 'grasshopper', active: false },
    { german: 'Ameisenbär', english: 'anteater', active: false },
    { german: 'Eichhörnchen', english: 'squirrel', active: false },
    { german: 'Bär', english: 'bear', active: false },
    { german: 'Löwe', english: 'lion', active: false },
    { german: 'Tiger', english: 'tiger', active: false },
  ]
});

function saveUser() {
  errors.value = addUser(newUser.value)
  if (errors.value.length === 0) {
    loginUser(newUser.value.email, newUser.value.password)
    router.push("/");
  }
}
</script>
<template>
  <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
    <div class="card w-auto">
      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="errors.length">
          <div v-for="error in errors">{{ error }}</div>
        </div>

        <form @submit.prevent="saveUser">
          <input type="text" class="form-control mb-3" placeholder="Benutzername" v-model="newUser.username" required />
          <input class="form-control mb-3" type="password" placeholder="Passwort" v-model="newUser.password" required />
          <input class="form-control mb-2" type="text" placeholder="E-Mail-Adresse" v-model="newUser.email" required />
          <div class="">
            <div class="">Du hast bereits ein Konto?<span class="mx-1"></span><a href="/#/login">Zum Login</a></div>
            <div class="mt-3"><button class="btn btn-success">Registrieren</button></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
