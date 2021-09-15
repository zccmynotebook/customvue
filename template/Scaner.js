export default class Scaner{
    constructor(str){
        this.str = str
        //指针
        this.pos = 0
        //尾巴，开始是模板字符串原文
        this.tail = str
    }
    //走过指定内容，没有返回值
    scan(tag){
        if(this.tail.indexOf(tag)===0){
            this.pos+=tag.length
            this.tail = this.str.substring(this.pos)
        }
    }
    //让指针扫描，直到遇见指定内容结束，且能够返回结束之前路过的文字
    scanUtil(stoptag){
        //记录执行本方法时，pos的值
        const pos_backup = this.pos
        //尾巴的开头不是stoptag时，说明还没有扫描到stoptag
        while(this.tail.indexOf(stoptag)!==0&&this.eos()){
            this.pos++
            //尾巴变为从当前字符到结束的全部内容
            this.tail = this.str.substr(this.pos)
        }
        return this.str.substring(pos_backup,this.pos)
    }
    eos(){
        return this.pos<this.str.length
    }
}