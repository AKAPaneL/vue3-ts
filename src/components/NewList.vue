<template>
  <div>
    <h2>子组件ts的测试</h2>
    <div>传参money:{{ money }}, 参数car:{{ car||'买不起' }}</div>
    <div>
        <button @click="emit('setMoney',1000000)">修改money</button>
        <button @click="emit('setCar','玛莎拉蒂')">修改car</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    money:number
    car?:string
}>()
const emit = defineEmits<{
    (event:'setMoney',money:number):void
    (event:'setCar',car:string):void
}>()

</script>
<style>

</style>