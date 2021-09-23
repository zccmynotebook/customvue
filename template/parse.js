import Scaner from './Scaner.js'
import nestTokens from './nestTokens.js'
//将模板字符串转换成数组
export default function(str){
    let tokens=[]
    let scaner = new Scaner(str)
    let w=''
    while(scaner.eos()){
        w=scaner.scanUtil("{{")
        console.log('text',w)
        w!=''&&tokens.push(['text',w])
        scaner.scan('{{')
        w=scaner.scanUtil("}}")
        
        if(w!=''){
            if(w[0]=='#'){
                console.log('#',w)
                tokens.push(['#',w.substring(1)])
            }else if(w[0]=='/'){
                console.log('/',w)
                tokens.push(['/',w.substring(1)])
            }else {
                console.log('name',w)
                tokens.push(['name',w])
            }
        }
        
        scaner.scan('}}')
    }
    return nestTokens(tokens)
}