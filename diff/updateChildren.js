// 4中命中查找：按顺序从上至下，一旦命中，不再继续判断
// 1.新前与旧前
// 2.新后与旧后
// 3.新后与旧前
// 4.新前与旧后
//while(新前<=新后&&旧前<=旧后)
//新节点先循环完，表示删除，老节点先完，是新增，一起完表示修改
//命中4时，要移动节点，移动新前指向的节点到老节点的旧前前面。
//命中3，移动新前 指向的节点到老节点的旧后后面
//4种都没命中，循环查找
import patchVNode from './patchVNode.js'
import createElement from './createElement.js'

export default function(parentElm,oldCh,newCh){
    let oldStartIdx=0   //旧前
    let newStartIdx=0   //新前
    let oldEndIdx=oldCh.length-1     //旧后
    let newEndIdx=newCh.length-1     //新后
    //上述对应位置的节点
    let oldStartNode=oldCh[0]
    let newStartNode=newCh[0]   
    let oldEndNode=oldCh[oldEndIdx]
    let newEndNode=newCh[newEndIdx]
    
    while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){
        //新前与旧前
        if(isSameVNode(oldStartNode,newStartNode)){
            patchVNode(oldStartNode,newStartNode)
            oldStartNode=oldCh[++oldStartIdx]
            newStartNode=newCh[++newStartIdx]
        }else if(isSameVNode(oldEndNode,newEndNode)){
            //新后与旧后
            patchVNode(oldStartNode,newStartNode)
            oldEndNode=oldCh[--oldEndIdx]
            newEndNode=newCh[--newEndIdx]
        }else if(isSameVNode(oldStartNode,newEndNode)){
            //新后与旧前
            patchVNode(oldStartNode,newStartNode)
            //命中3，移动新前 指向的节点到老节点的旧后后面
            parentElm.insertBefore(newCh[newStartIdx].elm,oldCh[oldEndIdx].elm)
            oldStartNode=oldCh[++oldStartIdx]
            newEndNode=newCh[--newEndIdx]
        }else if(isSameVNode(oldEndNode,newStartNode)){
            //新前与旧后
            patchVNode(oldStartNode,newStartNode)
            //命中4时，要移动节点，移动新前指向的节点到老节点的旧前前面。
            oldEndNode=oldCh[--oldEndIdx]
            newStartNode=newCh[++newStartIdx]
        }

    }


}

function isSameVNode(oldVNode,newVNode){
    return oldVNode.data.key===newVNode.data.key&&oldVNode.sel===newVNode.sel
}