<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { ChannelItem, ChannelResData } from '../types/data'
import { useChannelStore } from '../store';

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0'
});
//**---原始的父子组件数据传输实现---**
const channelItem =ref<ChannelItem[]>([])
const active = ref(0)

const emit = defineEmits<{
  (e:'onChangeItem',id:number):void
}>()

const getChannel = async ()=>{        //获取数据函数
  request<ChannelResData>({
    url:'/channels',
    method:'get'
  }).then((res)=>{
    channelItem.value = res.data.data.channels
  })
}
const changeItem = (id:number)=>{     //切换列表callback
  active.value = id
  emit('onChangeItem',id)
}
getChannel()

//**---使用 pinia 完成数据传输实现---**
const store = useChannelStore()

</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a
        class="item"
        :class="{ active: item.id === store.channelId }"
        href="javascript:;"
        v-for="item in channelItem"
        :key="item.id"
        @click="store.changeChannel(item.id)"
      >
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>