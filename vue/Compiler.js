export default class Compiler{
    constructor(el='body',vue){
        this.$veu=vue
        this.$el=document.querySelector(el)
        let fragment = el&&this.node2fragment(this.$el)
        this.compile(fragment)
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
        childNodes.forEach(v=>{
            if(v.nodeType==1){
                this.compileElement(v)
            } else if(v.nodeType==3){
                this.compileText(v)
            }
        })
    }
    compileElement(node){  
        let attrs=Array.from(node.attributes)
        attrs.forEach(v=>{
            let {name,value} = v
            if(name.startsWith('v-')){
                this.dealDir(name.substring(2))
            }
        })      
    }
    compileText(node){
        console.log(3,node)
    }
    dealDir(name){
        switch(name){
            case 'model':
            console.log(name)
            break;
            case 'for':
            console.log(name)
            break;
            case 'if':
            console.log(name)
            break;

        }
    }
}