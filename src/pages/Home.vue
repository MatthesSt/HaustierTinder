<script setup></script>
<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="my-3"><b>Haustier Tinder</b></h1>
    <img class="my-3" src="/public/Favicon.png" alt="" />
    <h2 class="my-3"><i>Choose your next pet</i></h2>
    <button
      @click="() => $router.push('/swipe')"
      type="button"
      class="btn"
      style="
        width: 15vw;
        background-color: #ff3378;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        border-radius: 10px;
      "
    >
      Start
    </button>
  </div>
</template>
