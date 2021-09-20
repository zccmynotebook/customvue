import h from './h.js'
import patch from './patch.js'

let root=document.querySelector('#app')
let v=h('div',{key:'a'},'vue')
// let v1=h('ul',{},[
//     h('li',{key:'a'},'A'),
//     h('li',{key:'b'},'B'),
// ])
// 
//   let v2=h('ul',{},[
//       h('li',{key:'d'},'D'),
//       h('li',{key:'a'},'A'),
//       h('li',{key:'b'},'B'),
//       h('li',{key:'c'},'C'),
//   ])
patch(root,v) 
 
document.querySelector('#btn').onclick=()=>{
    let v1=h('div',{key:'a'},h('ul',{},[
        h('li',{key:'a'},'A'),
        h('li',{key:'b'},'B'),
    ]))
    patch(v,v1) 
}