import parseAttrs from './parseAttrs.js'
export default function(template){
    let index=0,rest='';
    let startTagReg=/^<([a-z]+[1-6]?)(\s+[^<]+)?>/
    let endTagReg=/^<\/([a-z]+[1-6]?)>/
    //let wordReg=/^(?<=<\w+>\s+)(.*?)(?=\s+<\/\w+>)$/
    let wordReg=/^([^<]+)<\/[a-z]+[1-6]?>/
    let stack1=[],stack2=[]
     
    while(index<template.length-1){
        rest=template.substring(index)
        //开始字符串,入栈
        if(startTagReg.test(rest)){
            let r=rest.match(startTagReg)
            //console.log(r)
            let tag=r[1]
           
            stack1.push(tag)
            stack2.push({tag,chirdren:[],attrs:r[2]?parseAttrs(r[2]):null})

            //+2是<>的长度
            index+=tag.length+2
            //存在属性
            if(r[2]){
                index+=r[2].length
            }
        } else if(endTagReg.test(rest)){
            //结束标签，出栈
            let r=rest.match(endTagReg)[1]
            //+3是</>的长度
            index+=r.length+3
            index+=r.length+3        
            if(r===stack1[stack1.length-1]){
                let pop_tag=stack1.pop()
                let pop_child=stack2.pop()
                if(stack2.length>0){
                    stack2[stack2.length-1].chirdren.push(pop_child)
                }
            } else{
                new Error('不是闭合标签')
            }
        } else if(wordReg.test(rest)){
            //标签中的文字
            let r=rest.match(wordReg)[1]
            //console.log(r)
            if(r.trim()){
                stack2[stack2.length-1].chirdren.push({text:r,type:3})
            }
            index+=r.length
        }else{    
            index++
        }       
    }
    //console.log(stack1,stack2)
    return stack2
}
 