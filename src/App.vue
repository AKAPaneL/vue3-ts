<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import './utils/timeFormat'
import NewList from './components/NewList.vue';
import { ref } from 'vue';
const money =ref(5000)
const car = ref('')
</script>

<template>
  <div>
    <NewList :money="money" :car="car" @set-money="money = $event" @set-car="car = $event"></NewList>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
