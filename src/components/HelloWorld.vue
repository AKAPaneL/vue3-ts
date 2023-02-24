<script setup lang="ts">
import '../utils/timeFormat'
import NewList from './NewList.vue';
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


</style>
