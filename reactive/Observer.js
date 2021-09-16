import {def, observe} from './utils.js'
import defineReactive from './defineReactive.js'
import Dep from './Dep.js'
import arrayMethods from './array.js'

export default class Observer{
    constructor(obj){
        this.dep=new Dep()
        def(obj,'__ob__',this)
        if(Array.isArray(obj)){
            Object.setPrototypeOf(obj,arrayMethods)
            this.observeArray(obj)
        } else {
            this.walk(obj)
        }
        
    }
    walk(obj){
        for(let i in obj){
            defineReactive(obj,i)
        }
    }
    observeArray(obj){
        for(let i=0,l=obj.length;i<l;i++){
            observe(obj[i])
        }
    }
}