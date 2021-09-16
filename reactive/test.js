let obj1={m:1}
Object.defineProperty(obj1,'a',{
    writable:true,
    value:1,
    enumerable:true,
    configurable:true //是否可以删除
})
let obj={
    a:1,
    b:{
      c:{
          d:3,
          e:[7,8,9]
        }
    }
}
function parsePath(str){
    let list=str.split('.')
    return (obj)=>{
        for(let i=0;i<list.length;i++){
            obj=obj[list[i]]
            console.log(obj)
        }
        return obj
    }
}
m=parsePath('b.c.e')(obj)
console.log(m,obj)