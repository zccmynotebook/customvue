import vnode from './vnode.js'
import createElement from './createElement.js'
//sel, data, children, text, elm
export default function(oldVNode,newVNode){
    //第一个节点是dom还是vnode,dom,转换成vnode
    if(!oldVNode.sel){
        //包装成vnode
        oldVNode=vnode(oldVNode.tagName.toLowerCase(),{},undefined,undefined,oldVNode)
    }
    //new old是不是同一个节点，是，diff,否暴力更新
    if(oldVNode.data&&oldVNode.data.key&&oldVNode.data.key===newVNode.data.key&&oldVNode.sel===newVNode.sel){
        console.log('diff dom')
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
                
            }
        }

    }else{
        console.log('new dom')
        let dom=createElement(newVNode)
        let p=oldVNode.elm.parentNode
        p.insertBefore(dom,oldVNode.elm)
        //删除旧节点
        p.removeChild(oldVNode.elm)
    }

}