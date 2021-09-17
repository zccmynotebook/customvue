export default function(template){
    let index=0,rest='';
    let startTagReg=/^<([a-z]+[1-6]?)>/
    let endTagReg=/^<\/([a-z]+[1-6]?)>/
    let wordReg=/(?<=>\s+)(.*)(?=\s+<)/
    let stack1=[],stack2=[]
    while(index<template.length-1){
        rest=template.substring(index)
        //开始字符串,入栈
        if(startTagReg.test(rest)){
            let r=rest.match(startTagReg)[1]
             //+2是<>的长度
            index+=r.length+2
            stack1.push(r)
            stack2.push([])
           // console.log(stack1,stack2)
        } else if(endTagReg.test(rest)){
            //结束标签，出栈
            let r=rest.match(endTagReg)[1]
            //+3是</>的长度
            index+=r.length+3
            index+=r.length+3
            if(r===stack1[stack1.length-1]){
                //stack1.pop()
            } else{
                new Error('不是闭合标签')
            }
        } else if(wordReg.test(rest)){
            //标签中的文字
            let r=rest.match(wordReg)
            console.log(r)
            index+=r.length
        }else{
            
            index++
        }       
    }
    console.log(stack1,stack2)
    //return template
}