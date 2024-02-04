<script setup lang="ts">
import Sakana from 'sakana';
import {onMounted, ref, Ref} from "vue";

enum Character {
  chisato = 'chisato',
  takina = 'takina',
}

const sakana: Ref<null | any> = ref(null)
const currentCharacter = ref(Character.takina)

onMounted(() => {
  sakana.value = Sakana.init({
    el: '.sakana-box', // 启动元素node或选择器
    scale: .5, // 缩放倍数
    canSwitchCharacter: true, // 允许换角色
  });
})

function checkout () {
  if (!sakana.value) {
    return
  }
  const isChisato = currentCharacter.value === Character.chisato
  currentCharacter.value = isChisato ? Character.takina : Character.chisato
  sakana.value.setCharacter(currentCharacter.value);
}

defineExpose({ checkout })
</script>

<template>
  <div class="box">
    <div class="sakana-box" @click="checkout"></div>
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
