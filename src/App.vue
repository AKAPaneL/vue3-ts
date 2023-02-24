<script setup lang="ts">
import { ref } from 'vue';
import ArticleList from './components/ArticleList.vue';
import ChannelNav from './components/ChannelNav.vue';
const currentId = ref(0)

</script>

<template>
  <ChannelNav @on-change-item="currentId = $event"></ChannelNav>
  <ArticleList :current-id="currentId"></ArticleList>
</template>

<style scoped>


</style>
