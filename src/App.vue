<script setup>
import Sakana from './components/Sakana.vue'
import Toolbar from './components/Toolbar.vue'
import {onMounted, ref} from 'vue'

const sakanaRef = ref(null)

onMounted(() => {
  window.addEventListener("mousemove", event => {
    // TODO: Use custom attribute judgment
    if (event.target?.classList.contains('sakana-character')){
      window.winPenetrateFalse()
    }
    else {
      window.winPenetrateTrue()
    }
  });
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
