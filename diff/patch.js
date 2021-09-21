import vnode from './vnode.js'
import createElement from './createElement.js'
import patchVNode from './patchVNode.js'
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
        patchVNode(oldVNode,newVNode)
    }else{
        console.log('new dom')
        let dom=createElement(newVNode)
        let p=oldVNode.elm.parentNode
        p.insertBefore(dom,oldVNode.elm)
        //删除旧节点
        p.removeChild(oldVNode.elm)
    }

}