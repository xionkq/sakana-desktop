<script setup lang="ts">
import ShowIcon from "./icons/ShowIcon.vue";
import ToggleIcon from "./icons/ToggleIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";
</script>

<template>
  <div class="toolbar">
    <ToggleIcon />
    <ShowIcon />
    <CloseIcon />
  </div>
</template>

<style scoped>
.toolbar {
  width: 100%;
  height: 25px;
  background: rgba(255, 255, 255, .7);
  backdrop-filter: blur(6px);
  -webkit-app-region: drag;
  z-index: 20;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
