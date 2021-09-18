 
import Compiler from './Compiler.js'
import {observe} from '../reactive/utils.js'
import Watcher from '../reactive/Watcher.js'

export default class Vue{
    constructor(options={}){
        this.$options=options
        this._data=options.data||{}
        //收集依赖
        observe(this._data)
        //数据变成响应式
        this._initData()
        this._initWatch()
        //编译模板
        new Compiler(options.el,this)
    }
    _initData(){
        let self=this
        Object.keys(this._data).forEach(key=>{
            Object.defineProperty(self,key,{
                get(){
                    return self._data[key]
                },
                set(newval){
                    self._data[key]=newval
                }
            })
        })     
    }
    _initWatch(){
        let self=this
        let watch=this.$options.watch
        if(!watch) return
        Object.keys(this._data).forEach(key=>{
            new Watcher(self,key,watch[key])
        })
    }

}