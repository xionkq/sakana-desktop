<script setup lang="ts">
import Sakana from './components/Sakana.vue'
import Toolbar from './components/Toolbar.vue'
import { onMounted, ref } from 'vue'

const sakanaRef = ref(null)
const isSakanaClicked = ref(false)

const NOT_ALLOW_PENETRATE_LIST = ['sakana-character', 'toolbar', 'icon']

function isNotAllowPenetrate(classList: DOMTokenList) {
  const list = Array.from(classList)
  return list.some((item) => NOT_ALLOW_PENETRATE_LIST.includes(item))
}

onMounted(() => {
  window.addEventListener('mousemove', (event) => {
    if (isSakanaClicked.value || isNotAllowPenetrate((event.target as Element).classList)) {
      window.winPenetrateFalse()
    } else {
      window.winPenetrateTrue()
    }
  })

  const sakanaCharacter = document.getElementsByClassName('sakana-character')[0]
  sakanaCharacter.addEventListener('mousedown', () => {
    isSakanaClicked.value = true
  })
  window.addEventListener('mouseup', () => {
    isSakanaClicked.value === true && (isSakanaClicked.value = false)
  })
})

function checkout() {
  if (!sakanaRef.value) {
    return
  }
  sakanaRef.value.checkout()
}
</script>

<template>
  <Toolbar @checkout="checkout" />
  <Sakana ref="sakanaRef" />
</template>

<style>
body {
  margin: unset;
  position: relative;

  .toolbar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
