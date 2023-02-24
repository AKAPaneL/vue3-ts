<script setup lang="ts">

</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a
        class="item"
        :class="{ active: i === 0 }"
        href="javascript:;"
        v-for="(item, i) in 10"
        :key="i"
      >
        推荐{{ item }}
      </a>
    </nav>
  </div>
</template>