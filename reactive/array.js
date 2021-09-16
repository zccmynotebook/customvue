import { def } from "./utils";

const list=['push','pop','shift','unshift','sort','reverse','splice']
const arrayProto=Array.prototype
const arrayMethods= Object.create(arrayProto);

list.forEach(name=>{
    def(arrayMethods,name,function(){
        let origin=arrayProto[name]
        let result=origin.apply(this,arguments)
        let ob=this.__ob__
        let inserted=[]
        switch(name){
            case 'push':
            case 'unshift':
            inserted=[...arguments];
            break
            case 'splice':
            inserted=Array.from(arguments).slice(2)
            break
        }
        
        if(inserted){
            ob.observeArray(inserted)
        }
        return result
    })
})

export default arrayMethods