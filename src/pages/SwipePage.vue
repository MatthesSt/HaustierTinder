<script setup lang="ts"></script>
<template>
  <div class="m-3">
    <div class="w-100 d-flex justify-content-between mb-1">
      <button data-bs-target="#carouselExample" data-bs-slide="prev" type="button" class="btn btn-light"
        style="background-color: #ff3368; color: white; font-size: x-large">
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>
    <div class="rounded" style="background-color: #ff3368">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/chicken1.jpeg" class="d-block w-100 mt-3" style="height: 75vh; object-fit: contain" alt="..." />
            <p class="m-3 fs-3 text-white"><b>Claudia</b>, <i>34</i></p>
          </div>
          <div class="carousel-item">
            <img src="/chicken2.jpg" class="d-block w-100 mt-3" style="height: 75vh; object-fit: contain" alt="..." />
            <p class="m-3 fs-3 text-white"><b>SingleMom34</b>, <i>29</i></p>
          </div>
          <div class="carousel-item">
            <img src="/chicken3.jpg" class="d-block w-100 mt-3" style="height: 75vh; object-fit: contain" alt="..." />
            <p class="m-3 fs-3 text-white"><b>Crispy19</b>, <i>1</i></p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <i class="bi bi-hand-thumbs-down fs-1"></i>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <i class="bi bi-heart fs-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>
