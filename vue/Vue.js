 
import Compiler from './Compiler.js'
export default class Vue{
    constructor(options={}){
        this.$options=options
        this._data=options.data||{}
        new Compiler(options.el,this)
    }
}