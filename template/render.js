//将tokens变成dom字符串
export default function(tokens,data){
    let list=[]
    for(let i=0;i<tokens.length;i++){
        let m=tokens[i][0]
        let txt=tokens[i][1]
        if(m=='name'){
            list.push(data[txt])
        }else{
           list.push(txt)
        }
    }
    return list.join('')
}