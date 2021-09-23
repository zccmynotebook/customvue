import h from './h.js'
import patch from './patch.js'

let root=document.querySelector('#app')
//let v=h('div',{key:'a'},'vue')
let v=h('ul',{key:'u'},[
    h('li',{key:'a'},'A'),
    h('li',{key:'b'},'B'),
])

// 
//   let v2=h('ul',{key:'u'},[
//       h('li',{key:'d'},'D'),
//       h('li',{key:'a'},'A'),
//       h('li',{key:'b'},'B'),
//       h('li',{key:'c'},'C'),
//   ])
patch(root,v) 
 
document.querySelector('#btn').onclick=()=>{
    let v1=h('ul',{key:'u'},[      
        h('li',{key:'a'},'A'),
        h('li',{key:'b'},'B'),
        h('li',{key:'c'},'C'),
    ])
    patch(v,v1) 
}