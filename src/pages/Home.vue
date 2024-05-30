<script setup lang="ts"></script>
<template>
  <div>
    <h1 class="text-center">Haustier Tinder</h1>
    <div class="w-100 d-flex justify-content-between">
      <button type="button" class="btn btn-light color-black">
        <i class="bi bi-list"></i>
      </button>
      <button type="button" class="btn btn-light">
        <i class="bi bi-gear"></i>
      </button>
    </div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/chicken1.jpeg"
            class="d-block w-100"
            style="height: 800px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/chicken2.jpg"
            class="d-block w-100"
            style="height: 800px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/chicken3.jpg"
            class="d-block w-100"
            style="height: 800px"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
