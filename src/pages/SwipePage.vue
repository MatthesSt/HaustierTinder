<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllAnimals } from '../shelter';
import { currentUser } from '../user';

const prevButton = ref<HTMLButtonElement | null>(null);
const animals = getAllAnimals().sort((a, b) => +currentUser.value?.preferences.includes(b.art)! - +currentUser.value?.preferences.includes(a.art)!);
onMounted(() => {
  prevButton.value?.click();
});
</script>
<template>
  <div class="m-3">
    <div class="w-100 d-flex justify-content-between mb-1">
      <button
        ref="prevButton"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        type="button"
        class="btn btn-light"
        style="background-color: #ff3368; color: white; font-size: x-large"
      >
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>
    <div class="rounded" style="background-color: #ff3368">
      <div id="carouselExample" class="carousel slide" data-bs-touch="true">
        <div class="carousel-inner">
          <div v-for="(animal, index) in animals" class="carousel-item" :key="index" :class="{ active: index == 1 }">
            <img :src="animal.url" class="d-block w-100 mt-3" style="height: 60vh; object-fit: contain" alt="..." />
            <p class="m-3 fs-3 text-white">
              <b>{{ animal.name }}</b>
              ,
              <i>{{ animal.art }}</i>
              ,
              <i>{{ animal.rasse }}</i>
              ,
              <i>{{ animal.alter }}</i>
            </p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <i class="bi bi-hand-thumbs-down fs-1"></i>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <i class="bi bi-heart fs-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>
