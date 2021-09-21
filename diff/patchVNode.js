import updateChildren from './updateChildren.js'
import createElement from './createElement.js'
//sel, data, children, text, elm
export default function(oldVNode,newVNode){
    if(oldVNode===newVNode) return
    //new node 是文本
    if(newVNode.text!=undefined&&!newVNode.children){
        if(newVNode.text!==oldVNode.text){
            oldVNode.elm.textContent=newVNode.text
        }
    }else  if(newVNode.text==undefined&&newVNode.children){
        if(!oldVNode.children){
            let dom=oldVNode.elm
            dom.innerHTML=''
            let list=newVNode.children
            list.forEach(v=>{
               dom.appendChild(createElement(v))
            })              
        }else{
            //新旧都有子节点
            //新建的节点插入到未处理的节点前，非已处理的节点后
            updateChildren(oldVNode.elm,oldVNode.children,newVNode.children)
        }
    }

}

