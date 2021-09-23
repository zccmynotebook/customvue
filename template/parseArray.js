import render from './render.js'
import lookup from "./lookup.js";
export default function(token,data){
    let v=lookup(data,token[1])
    let r=[]
    for(let i=0;i<v.length;i++){
        r.push(render(token[2],{
            '.':v[i],
            ...v[i]
        }))
    }
    return r.join('')
}