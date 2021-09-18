import Watcher from '../reactive/Watcher.js'

export default class Compiler{
    constructor(el='body',vue){
        this.$vue=vue
        this.$el=document.querySelector(el)
        let fragment = el&&this.node2fragment(this.$el)
        this.compile(fragment)
        this.$el.appendChild(fragment)
    }
    node2fragment(el){
        let fragment=document.createDocumentFragment()
        while(el.firstChild){
            fragment.appendChild(el.firstChild)
        }
        return fragment
    }
    compile(el){
        let childNodes= el.childNodes
        let reg=/^\{\{(.+)\}\}$/
        childNodes.forEach(v=>{
            let txt=v.textContent
            if(v.nodeType==1){
                this.compileElement(v)
            } else if(v.nodeType==3&&reg.test(txt)){
                let name=txt.match(reg)[1]
                this.compileText(v,name)
            }
        })
    }
    compileElement(node){  
        let attrs=Array.from(node.attributes)
        attrs.forEach(v=>{
            let {name,value} = v
            if(name.startsWith('v-')){
                this.dealDir(name.substring(2),value)
            }
        })      
    }
    compileText(node,name){
        console.log(3,node,name)
        let v=this.parsePath(this.$vue,name)
        node.textContent=v
        new Watcher(this.$vue,name,(v)=>{
            node.textContent=v
        })
    }
    dealDir(name,value){
        switch(name){
            case 'model':
            console.log(name,value)
            break;
            case 'for':
            console.log(name,value)
            break;
            case 'if':
            console.log(name,value)
            break;

        }
    }
    parsePath(vue,exp){
        let val=vue
        let list=exp.split('.')
        list.forEach(key=>{
            val=val[key]
        })
        return val
    }
    setPathValue(vue,exp,value){
        let val=vue
        let list=exp.split('.')
        list.forEach((k,i)=>{
           if(i<list.length-1){
               value=val[k]
           }else {
               val[k]=value
           }
        }) 
     }
}