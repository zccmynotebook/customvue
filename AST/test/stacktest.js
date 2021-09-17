//3[abc] abcabcabc
//3[2[a]2[b]]aabbaabbaabb
//数字放一个栈，字符放一个栈,[放到字符栈，push'',]，则出栈去操作,结果再入字符栈
function repeat(str){
   let i=0,numstack=[], strstack=[]
   //不用for防止多位数，指针不好加
   while(i<str.length-1){
      let rest=str.substring(i)

      if(/^\d+\[/.test(rest)){
         let r=rest.match(/^(\d+)\[/)[1]
         i+=r.length+1
         numstack.push(Number(r))
         strstack.push('')
        
         console.log(numstack,strstack)
      } else if(/^\w+\]/.test(rest)){
         //把栈顶改为字母
         let r=rest.match(/^(\w+)\]/)[1]
         i+=r.length
         strstack[strstack.length-1]=r       
      }else if(rest[0]==']'){
         console.log(numstack,strstack)
         let num=numstack.pop()
         let word=strstack.pop()
         console.log(num,word)
         strstack[strstack.length-1]+=word.repeat(num)
         i++
         console.log(numstack,strstack)
      }
   }
   return strstack[0].repeat(numstack[0])
}


a=repeat('3[2[a]2[bc]]')
console.log(a)