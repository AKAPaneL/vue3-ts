<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import ArticleList from './components/ArticleList.vue';
import ChannelNav from './components/ChannelNav.vue';
//使用store
import { useAlertsStore } from './store/index'
const store = useAlertsStore()
const { count,doubleCount } = storeToRefs(store)

const currentId = ref(0)

</script>

<template>
  <ChannelNav @on-change-item="currentId = $event"></ChannelNav>
  <ArticleList :current-id="currentId"></ArticleList>
</template>

<style scoped>


</style>
