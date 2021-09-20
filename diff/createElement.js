//将vnode变成dom
export default function createElement(vnode){
    let node=document.createElement(vnode.sel)
    console.log(vnode,vnode.children)
    vnode.elm=node
    //文本节点
    if(vnode.text!=undefined && !vnode.children){
        let txt=document.createTextNode(vnode.text)
        node.appendChild(txt)
        
    } else if(vnode.children&&Array.isArray(vnode.children)&&vnode.children.length>0){
        let list=vnode.children
        list.forEach(v=>{          
            node.appendChild(createElement(v))
        })
    }
    return vnode.elm
}