<script setup lang="ts">
import { watch, ref } from 'vue';
import { RootObject, Result } from '../types/data'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0'
});

const props = defineProps<{
  currentId: number
}>()

const articles = ref<Result[]>([])

watch(() => props.currentId, async () => {
  const res = await request.get<RootObject>('/articles', {
    params: {
      channel_id: props.currentId,
      timestamp: Date.now()
    }
  })
  articles.value = res.data.data.results
}, { immediate: true })

</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="item in articles" :key="item.art_id">
      <p class="title">{{ item.title }}</p>
      <img class="img" v-for="(v, i) in item.cover.images" :key="i" :src="v" alt="">
      <div class="info">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>