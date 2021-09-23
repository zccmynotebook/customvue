import lookup from './lookup.js'
import parseArray from './parseArray.js'
//将tokens变成dom字符串
export default function(tokens,data){
    let list=[]
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i]
        let m=token[0]
        let txt=token[1]
        if(m=='name'){
            list.push(lookup(data,txt))
        }else if(m=='text'){
           list.push(txt)
        }else if(m=='#'){
            list.push(parseArray(token,data))
        }
    }
    return list.join('')
}