import Dep from "./Dep";

let uid=0
export default class Watcher{
    constructor(target,expression,callback){
        console.log('this is a watcher')
        this.id=uid++
        this.target=target
        this.callback=callback
        this.getter=parsePath(expression)
        this.value=this.get()
    }
    update(){
        this.run()
    }
    get(){
        //依赖收集
        Dep.target=this
        let obj=this.target
        let value
        try{
            value=this.getter(obj)
        }finally{
            Dep.target=null
        }
        return value
    }
    run(){
        this.getAndInvoke(this.callback)
    }
    getAndInvoke(cb){
        const value=this.get()
        if(value!==this.value||typeof value=='object'){
            const oldValue=this.value
            this.value=value
            cb.call(this.target,value,oldValue)
        }
    }
}
function parsePath(str){
    let list=str.split('.')
    return (obj)=>{
        if(!obj) return
        for(let i=0;i<list.length;i++){
            obj=obj[list[i]]
        }
        return obj
    }
}