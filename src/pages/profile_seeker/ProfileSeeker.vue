<template>
  <div class="container">
    <div>
      <h1>Hallo, {{ userName }}</h1>
    </div>

    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="item of ['Einstellungen', 'Matches']">
        <h2 class="accordion-header" :id="`headind${item}`">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="`#collapse${item}`" aria-expanded="false" :aria-controls="`collapse${item}`">
            {{ item }}
          </button>
        </h2>
        <div :id="`collapse${item}`" class="accordion-collapse collapse" :aria-labelledby="`headind${item}`"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <Preferences v-if="item == 'Einstellungen'" />
            <Matches v-if="item == 'Matches'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Preferences from "./Preferences.vue"
import Matches from "./Matches.vue"

const userName = ref('user');

</script>
<style></style>
