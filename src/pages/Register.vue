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
    <div class="card w-25">
      <div class="card-body">
        <form @submit.prevent="saveUser">
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Username"
            v-model="newUser.username"
          />
          <input
            class="form-control mb-2"
            type="password"
            placeholder="Password"
            v-model="newUser.password"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Email"
            v-model="newUser.email"
          />
          <div class="d-flex justify-content-between align-items-center mt-2">
            <a href="/#/login">zurück zum login</a>
            <button class="btn btn-success">registrieren</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
