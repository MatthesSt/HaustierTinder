<script setup lang="ts">
import { loginUser } from "../user";

const loginCredentials = {
  email: "",
  password: ""
}

function attemptLogin() {
  loginUser(loginCredentials.email, loginCredentials.password);
}
</script>
<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh"
  >
    <div class="card w-auto">
      <div class="card-body">
        <form @submit.prevent="attemptLogin">
          <input
              class="form-control mb-3"
              type="text"
              placeholder="E-Mail-Adresse"
              v-model="loginCredentials.email"
          />
          <input
            class="form-control mb-2"
            type="password"
            placeholder="Passwort"
            v-model="loginCredentials.password"
          />
            <div class="">
              <div class="">Noch kein Konto?<span class="mx-1"></span><a href="/#/register">Hier registrieren!</a></div>
              <div class="mt-3"><button class="btn btn-success">Einloggen</button></div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
