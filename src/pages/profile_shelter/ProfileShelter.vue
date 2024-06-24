<script setup lang="ts">
import { ref } from 'vue';
import { createAnimal } from '../../shelter';
import Animals from './Animals.vue';
import { Animal } from '../../types';

const emptyAnimal: Animal = {
  id: '',
  name: '',
  alter: 0,
  art: '',
  rasse: '',
  farbe: '',
  besonderheiten: '',
  url: '',
};

const newAnimal = ref<Animal>({ ...emptyAnimal });
</script>
<template>
  <!-- Button trigger modal -->
  <button title="Tierinserat anlegen" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Tierinserat anlegen</button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tierinserat anlegen</h5>
          <button title="Schließen" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control mb-1" placeholder="Name" v-model="newAnimal.name" />
          <input type="number" class="form-control mb-1" placeholder="Alter" v-model="newAnimal.alter" />
          <input type="text" class="form-control mb-1" placeholder="Art" v-model="newAnimal.art" />
          <input type="text" class="form-control mb-1" placeholder="Rasse" v-model="newAnimal.rasse" />
          <input class="form-control mb-1" placeholder="Farbe" v-model="newAnimal.farbe" />
          <textarea class="form-control" placeholder="Besonderheiten" v-model="newAnimal.besonderheiten"></textarea>
          <input type="text" class="form-control" placeholder="Bildadresse" v-model="newAnimal.url">
        </div>
        <div class="modal-footer">
          <button title="Abbrechen" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>
          <button
              title="Tierinserat anlegen"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="createAnimal({ ...newAnimal }), (newAnimal = { ...emptyAnimal })"
          >
            Anlegen
          </button>
        </div>
      </div>
    </div>
  </div>

  <Animals></Animals>
</template>
