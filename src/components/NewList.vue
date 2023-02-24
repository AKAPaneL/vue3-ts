<template>
  <div>
    <h2>子组件ts的测试</h2>
    <div>传参money:{{ money }}, 参数car:{{ car||'买不起' }}</div>
    <div>
        <button @click="emit('setMoney',1000000)">修改money</button>
        <button @click="emit('setCar','玛莎拉蒂')">修改car</button>
    </div>
    <h2 ref="h2">ts 数据绑定</h2>
    <input type="text" v-model="inputText">
    <button @click="addData">添加数据</button>
    <span>列表总数：{{ listTotal }}</span>
    <div v-for="item in dataList">
      <span> id :{{ item.id }}</span>
      <span> text : {{ item.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,computed, onMounted } from 'vue';
import { setParams } from '../utils/setParams/setParams'

defineProps<{
    money:number
    car?:string
}>()
   //子传父 自定义事件
const emit = defineEmits<{               
    (event:'setMoney',money:number):void
    (event:'setCar',car:string):void
}>()

type Data = {
  id:number
  text:string
}
const h2 = ref<HTMLHeadElement|null>(null)
const a:Data = reactive({id:1,text:'panel'})  
const dataList  = ref<Data[]>([])
const inputText = ref<string>('')
const addData = (event:Event)=>{             //添加数据函数
  dataList.value.push({
    id:dataList.value.length+1,
    text:inputText.value
  })
}
const listTotal = computed<number>(()=>dataList.value.length) //计算属性
onMounted(()=>{                         //生命周期
  if(h2.value){
    h2.value.innerHTML = 'h2标题dom修改'
    console.log(setParams('sss'));
    
  }
  // h2.value!.innerHTML = 'h2标题dom修改'   //非空断言
})              
  

</script>

<style>

</style>