<script setup lang="ts">
import Sakana from 'sakana';
import {onMounted} from "vue";

onMounted(() => {
  Sakana.init({
    el: '.sakana-box', // 启动元素node或选择器
    scale: .5, // 缩放倍数
    canSwitchCharacter: true, // 允许换角色
  });
})
</script>

<template>
  <div class="box">
    <div class="sakana-box"></div>
  </div>
</template>

<style scoped>
.box {
  width: 150px;
  height: 300px;
  overflow: hidden;
  position: relative;

  .sakana-box {
    height: 400px !important;
    transform-origin: unset !important;
    left: -180px;
  }
}
</style>
