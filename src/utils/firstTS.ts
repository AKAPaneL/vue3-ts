export {}
// 定义基本数据类型
const arr1:number[] = [1,2,3]
const arr2:string[] = ['123','panel']

// 定义数组
const arr3:Array<string> = ['123','panel']
const arr4:(string | number)[] = ['123',1,3,'panel']
const arr5:Array<string | number> =['123',1,3,'panel']
const arr6:Object[] = [{},{}]
const arr7:[] = []
const arr8:{}[] = [{},{}]

// 定义函数
function sum(first:number,second:number):number {
    return first+second
}
function say1():void{

}

const say2 = ():void=>{
    
}
// 类型别名:自定义类型
type NumberOrStringArr = Array<number|string>
type NumberFn = (first:number,second:number) => number
type anyFn = ()=>void

const newFn:NumberFn = (num1,num2) => {
    return num1+num2
}

// 定义对象
const obj1:{} = {}
type CustomObj = {
    name:string
    age:number
    fn:()=>void
}
const obj2:CustomObj ={
    name:'panel',
    age:22,
    fn(){
        
    }
}


// interface 使用
interface Person {
    name:string
    age:number
    fn:()=>void
}

interface man extends Person  {
    gender:1
}

type woman ={
    gender:0
}&Person

const a:woman = {
    name:'panel',
    age:23,
    gender:0,
    fn(){

    }
}

// 泛型使用
type Request<T> = {
    url:string
    methods:string
    data:T
}
type UserInfo = {
    name:string
    password:string
}
const getUserInfoConfig:Request<UserInfo> = {
    url:'/api/user',
    methods:'post',
    data:{
        name:'panel',
        password:'12345678'
    }
}





