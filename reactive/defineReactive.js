import {observe} from './utils.js'
import Dep from './Dep.js'

export default function(obj,key,val){
    let dep=new Dep()
    if(arguments.length==2){
        val=obj[key]
    }
    let childObj=observe(val)

    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get(){
            console.log(`get ${obj}的${key}属性，值是${val}`)
            //依赖收集
            if(Dep.target){
                dep.depend()
                if(childObj){
                    childObj.dep.depend()
                }
            }
            return val
        },
        set(newval){
            console.log(`set ${obj}的${key}属性，值是${newval}`)
            if(newval===val) return
            val=newval
            childObj = observe(newval)
            dep.notify()
        }
    })
}