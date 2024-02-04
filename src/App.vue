<script setup>
import Sakana from "./components/Sakana.vue";
import Toolbar from "./components/Toolbar.vue";
import {ref} from "vue";

const sakanaRef = ref(null)

function checkout () {
  if (!sakanaRef.value) {
    return;
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
    left: 0;
  }
}
</style>
