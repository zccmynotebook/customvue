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
        //首先略过加undefined的标记过的内容
        if(oldStartNode==undefined){
            oldStartNode=oldCh[++oldStartIdx]
        }else if(oldEndNode==undefined){
            oldEndNode=oldCh[--oldStartIdx]
        }else if(newStartNode==undefined){
            newStartNode=newCh[++newStartIdx]
        }else if(oldEndNode==undefined){
            newEndNode=newCh[--newEndIdx]
        }else if(isSameVNode(oldStartNode,newStartNode)){
            //新前与旧前
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
            console.log('新后与旧前')
            patchVNode(oldStartNode,newStartNode)
            //命中3，移动新前 指向的节点到老节点的旧后后面
            parentElm.insertBefore(oldStartNode.elm,oldEndNode.elm.nextSibling)
            oldStartNode=oldCh[++oldStartIdx]
            newEndNode=newCh[--newEndIdx]
        }else if(isSameVNode(oldEndNode,newStartNode)){
            //新前与旧后
            console.log('新前与旧后')
            patchVNode(oldStartNode,newStartNode)
            //命中4时，要移动节点，移动新前指向的节点到老节点的旧前前面。
            parentElm.insertBefore(oldStartNode.elm,oldEndNode.elm)
            oldEndNode=oldCh[--oldEndIdx]
            newStartNode=newCh[++newStartIdx]
        }else{
           //都没命中
           //将KeyToIndexMap
           if(!keyMap){
               let keyMap={}
               for(let i=oldStartIdx;i<=oldEndIdx;i++){
                  let key=oldCh[i].data.key;
                  if(key!=undefined){
                      keyMap[key]=i
                  }
               }
           }
           
           //寻找当前项newStartIdx在keymap中位置
           const idInOld=keyMap[newStartNode.key]
           if(idInOld==undefined){
               //是新增
               parentElm.insertBefore(createElement(newCh[i]),oldCh[oldStartIdx].elm)
           }else{
               //移动
               const eleToMove=oldCh[idInOld]
               patchVNode(eleToMove,newStartNode)
               //处理完，设为undefined
               oldCh[idInOld]=undefined
               parentElm.insertBefore(eleToMove.elm,oldStartNode.elm)
           }
           newStartNode=newCh[++newStartIdx]
        }

    }
 
     //老的完了，新的还有剩余，是新增
     if(newStartIdx<=newEndIdx){
        const before=newCh[newEndIdx+1]==null?null:newCh[newEndIdx+1].elm
        for(let i=newStartIdx;i<=newEndIdx;i++){
            //null,等同于append
            parentElm.insertBefore(createElement(newCh[i]),before)
        }
    }else if(oldStartIdx<=oldEndIdx){
        //删除
        for(let i=oldStartIdx;i<=oldEndIdx;i++){
            oldCh[i]&&parentElm.removeChild(oldCh[i])
        }
    }

}

function isSameVNode(oldVNode,newVNode){
    return oldVNode.data.key===newVNode.data.key&&oldVNode.sel===newVNode.sel
}