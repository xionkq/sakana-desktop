<script setup>
import Sakana from "./components/Sakana.vue";
import Toolbar from "./components/Toolbar.vue";
</script>

<template>
  <Toolbar />
  <Sakana />
</template>

<style>
body {
  margin: unset;
  position: relative;

  .toolbar {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
