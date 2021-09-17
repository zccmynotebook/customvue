//寻找字符串连续重复次数最多的字母
//思路：str[i]==str[j],i不动，J后移
//str[i]！==str[j],i移动到j位置，J后移
let str='aaabbbbccccccdddddd'
let obj={}
//方法一：
;(function(){
    for(let i=0,j=1;i<str.length,j<=str.length;){
        if(!obj[str[i]]) obj[str[i]]=0
        if(str[i]==str[j]){
            j++
            obj[str[i]]++
            continue
        } else{
            i=j
            j++
            continue
        }
    }
    let max=Math.max(...Object.values(obj))   
    let alphs=[]
    for(let i in obj){
        if(obj[i]===max){
            alphs.push(i)
        }
    }
    //每个字母都少加了一次
    console.log(alphs,`方法1：${alphs}重复${max+1}次`)
})();

//方法二：
;(function(){
    let i=0,j=1,max=0,char='';
    while(i<str.length){
       if(str[i]!==str[j]){       
          //console.log(`${str[i]}重复${j-i}次`)
          if(j-i>max){
            max=j-i
            char=str[i]
           }
          i=j
       } 
       j++
    }
    console.log(`方法2：${char}重复${max}次`)
})();

//方法一优化：
;(function(){
    let max=0,char='';
    for(let i=0,j=1;i<str.length,j<=str.length;){
        if(str[i]==str[j]){
            j++
            continue
        } else{
            //>=会继续寻找一样的，和方法一的差距就是不能查找所有一样的
            if(j-i>=max){
                max=j-i
                char=str[i]
            }  
            i=j
            j++
            continue
        }
    }
    console.log(`方法3：${char}重复${max}次`)    
})();
