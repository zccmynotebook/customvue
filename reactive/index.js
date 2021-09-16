import {observe} from './utils.js'
import Watcher from './Watcher.js'
let obj={
    a:1,
    b:{
      c:{
          d:3,
          e:[7,8,9]
        }
    }
}
observe(obj)
// console.dir(obj)
// obj.b.c.d
//obj.b.c.e.push(1)
//obj.b.c.e.splice(1,0,2)
// console.log(obj.b.c.e.splice(1,0,9))
new Watcher(obj,'b.c,d',()=>{
    console.log(obj)
})
obj.b.c.d=100