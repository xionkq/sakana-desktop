<script setup lang="ts">
import Sakana from 'sakana'
import { onMounted, ref, Ref } from 'vue'

enum Character {
  CHISATO = 'chisato',
  TAKINA = 'takina',
}

const sakana: Ref<null | any> = ref(null)
const currentCharacter = ref(Character.TAKINA)

onMounted(() => {
  sakana.value = Sakana.init({
    el: '.sakana-box', // 启动元素node或选择器
    scale: 0.5, // 缩放倍数
    canSwitchCharacter: true, // 允许换角色
  })
})

function checkout() {
  if (!sakana.value) {
    return
  }
  const isChisato = currentCharacter.value === Character.CHISATO
  currentCharacter.value = isChisato ? Character.TAKINA : Character.CHISATO
  sakana.value.setCharacter(currentCharacter.value)
}

defineExpose({ checkout })
</script>

<template>
  <div class="box">
    <div class="sakana-box"></div>
  </div>
</template>

<style scoped>
.box {
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;

  .sakana-box {
    height: 400px !important;
    transform-origin: unset !important;
    left: -55px;
  }
}
</style>
