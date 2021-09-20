import vnode from './vnode.js';
//简化版，必须是3个参数
//h(sel,{},text)
//h(sel,{},h)
//h(sel,{},[h,h])
export default function(sel,data,c){
   if(arguments.length<3) new Error('必须是3个参数')
    console.log('c',c)
   if(typeof c=='string'||typeof c=='number'||typeof c=='boolean'){
    
      return vnode(sel, data, undefined, c, undefined)

   }else if(Array.isArray(c)){
       let children = []
       c.forEach(v=>{
          if(typeof v == 'object'&&v.hasOwnProperty('sel')){
                children.push(v)
          }
       })
      return vnode(sel, data, children, undefined, undefined)    
   }else if(typeof c == 'object'&&c.hasOwnProperty('sel')){
      let children=[c]
      return vnode(sel, data, children, undefined, undefined)
   }

    new Error('第3个参数类型不符合要求')
}