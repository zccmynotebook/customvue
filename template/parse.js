import Scaner from './Scaner.js'
//将模板字符串转换成数组
export default function(str){
    let tokens=[]
    let scaner = new Scaner(str)
    let w=''
    while(scaner.eos()){
        w=scaner.scanUtil("{{")
        console.log(1,w)
        w!=''&&tokens.push(['text',w])
        scaner.scan('{{')
        w=scaner.scanUtil("}}")
        console.log(2,w)
        w!=''&&tokens.push(['name',w])
        scaner.scan('}}')
    }
    return tokens
}