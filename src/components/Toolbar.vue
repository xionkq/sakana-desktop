<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['checkout'])

const isToolbarShow = ref(true)

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
        <img src="../assets/icon-hide.png" class="icon"  alt=""/>
      </div>
    </template>
    <template v-else>
      <div class="drag-box"></div>
      <div class="icon-box" @click="goToGithub">
        <img src="../assets/icon-github.png" class="icon"  alt=""/>
      </div>
      <div class="icon-box" @click="$emit('checkout')">
        <img src="../assets/icon-toggle.png" class="icon"  alt=""/>
      </div>
      <div class="icon-box" @click="switchToolbar">
        <img src="../assets/icon-show.png" class="icon"  alt=""/>
      </div>
      <div class="icon-box" @click="hideWindow">
        <img src="../assets/icon-close.png" class="icon"  alt=""/>
      </div>
    </template>
  </div>
</template>

<style scoped>
.toolbar {
  width: 150px;
  height: 20px;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding: 2px;

  &.show {
    background: rgba(255, 255, 255, 0.7);
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

    .icon {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
