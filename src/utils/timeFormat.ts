
export {}
const formatDate = (date?:string|Date):string=>{  //时间格式化函数
    if(typeof date==='string'){
        date = new Date(date)
    }
    if(!date){
        date = new Date()
    }
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()

    return `${h}:${m}:${s}`
}

interface ArrayDate {
    count:number
    time:string
}
const KEY = 'myTime'
const getData = ():ArrayDate[]=>{                           //获取本地数据
    const res = localStorage.getItem(KEY)
    return res?JSON.parse(res):[]  
}

const updateData = () => {                                  //更新数据的函数
     const data = getData()  //拿到本地数据
     const newData:ArrayDate = {  //设置新数据
        count:data.length + 1,
        time:formatDate()
     }
    data.push(newData)   //新增数据
    localStorage.setItem(KEY,JSON.stringify(data))  //存入本地
}

(function():void{
    updateData()
})()
