import Observer from './Observer.js'

export function def(obj,key,value,enumerable){
    Object.defineProperty(obj,key,{
        enumerable:!!enumerable,
        configurable:true,
        writable:true,
        value
    })
}

export function observe(obj){
    let ob;
    if(typeof obj!='object') return
    if(typeof obj.__ob__=='undefined'){
        ob=new Observer(obj)
    } else{
        ob=obj.__ob__
    }
    return ob
}