import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

//这是一个测试仓库
export const useAlertsStore = defineStore('alerts', ()=>{
    const count = ref<number>(100)
    const doubleCount = computed<number>(()=> count.value*2)
    const changeCount = ()=>{
        count.value = 100000
    }
    return { count, doubleCount,changeCount }
})

//channel逻辑仓库
export const useChannelStore = defineStore('channel',()=>{
    const channelId = ref<number>(0)
    const changeChannel = (id:number)=>{
        channelId.value = id
    }
    return {
        channelId,
        changeChannel
    }
})