<script setup lang="ts">
import { ref } from "vue";
import ShowIcon from "./icons/ShowIcon.vue";
import HideIcon from "./icons/HideIcon.vue";
import ToggleIcon from "./icons/ToggleIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";

defineEmits(['checkout'])

const isToolbarShow = ref(false)

function hideWindow() {
  window.hideWin()
}

function switchToolbar() {
  isToolbarShow.value = !isToolbarShow.value
}

function goToGithub() {
  window.openLink('https://github.com/xionkq/sakana-desktop')
}
</script>

<template>
  <div class="toolbar" :class="{ show: isToolbarShow }">
    <template v-if="!isToolbarShow">
      <div class="icon-box" @click="switchToolbar">
        <HideIcon />
      </div>
    </template>
    <template v-else>
      <div class="drag-box"></div>
      <div class="icon-box" @click="goToGithub">
        <GithubIcon />
      </div>
      <div class="icon-box" @click="$emit('checkout')">
        <ToggleIcon />
      </div>
      <div class="icon-box" @click="switchToolbar">
        <ShowIcon />
      </div>
      <div class="icon-box" @click="hideWindow">
        <CloseIcon />
      </div>
    </template>
  </div>
</template>

<style scoped>
.toolbar {
  width: 100%;
  height: 25px;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.show {
    background: rgba(255, 255, 255, .7);
    backdrop-filter: blur(6px);
  }

  .drag-box {
    flex: 1;
    height: 100%;
    -webkit-app-region: drag;
  }

  .icon-box {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>
