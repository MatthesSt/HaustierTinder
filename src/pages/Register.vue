<script setup lang="ts">
import { ref } from "vue";
import { addUser } from "../user";
import { User } from "../types";

const newUser = ref<User>({
  id: Math.random().toString().substr(2, 9),
  username: "",
  password: "",
  email: "",
  role: "user",
});

function saveUser() {
  addUser(newUser.value);
}
</script>
<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh"
  >
    <div class="card w-auto">
      <div class="card-body">
        <form @submit.prevent="saveUser">
          <input
            type="text"
            class="form-control mb-3"
            placeholder="Benutzername"
            v-model="newUser.username"
          />
          <input
            class="form-control mb-3"
            type="password"
            placeholder="Passwort"
            v-model="newUser.password"
          />
          <input
            class="form-control mb-2"
            type="text"
            placeholder="E-Mail-Adresse"
            v-model="newUser.email"
          />
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
