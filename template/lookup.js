export default function(obj,key){
  if(key.indexOf('.')!=-1&&key!=='.'){
    let list=key.split('.')
    let temp=obj
    for(let i=0;i<list.length;i++){
        temp=temp[i]
    }
    return temp
  }
  return obj[key]
}