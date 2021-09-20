import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
  } from "snabbdom";
const container=document.querySelector('#container')

const patch = init([
// Init patch function with chosen modules
classModule, // makes it easy to toggle classes
propsModule, // for setting properties on DOM elements
styleModule, // handles styling on elements with support for animations
eventListenersModule, // attaches event listeners
]);

let vnode=h('a',{props:{href:'https://github.com/snabbdom/snabbdom'}},'欢迎学习snbbdom')
console.log(vnode)
patch(container, vnode);
// let v1=h('ul',[
//   h('li','A'),
//   h('li','B'),
// ])
// let v2=h('ul',[
//     h('li','D'),
//     h('li','A'),
//     h('li','B'),
//     h('li','C'),
// ])
let v1=h('ul',[
  h('li',{key:'a'},'A'),
  h('li',{key:'b'},'B'),
])
let v2=h('ul',[
    h('li',{key:'d'},'D'),
    h('li',{key:'a'},'A'),
    h('li',{key:'b'},'B'),
    h('li',{key:'c'},'C'),
])
patch(document.getElementById('app'),v1)
document.querySelector('#btn').onclick=()=>{
  let p= patch(v1,v2)
  console.log(p)
}

