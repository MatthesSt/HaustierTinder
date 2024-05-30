<script setup lang="ts">
import { Jupyter } from "jupyter-vue";
const notebook = new Jupyter.Notebook();
</script>
<template>
  <div>
    <Jupyter :notebook="notebook" />
  </div>
</template>
<style scoped lang="scss"></style>
