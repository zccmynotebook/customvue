//折叠tokens,将#和/之间的tokens整合起来作为数组第三项
//#入栈，/出栈
export default function(tokens){
    let nestedTokens=[] //结果数组
    let sections=[]
    let collector=nestedTokens //收集器
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i]
        switch(token[0]){
            case '#':
               //第2个元素，收集子元素
               collector.push(token)
               sections.push(token)
               collector=token[2]=[]
            break
            case '/':
               sections.pop()
               collector=sections.length>0?sections[sections.length-1][2]:nestedTokens
            break
            default:
                collector.push(token)
        }
    }
    return nestedTokens
}
