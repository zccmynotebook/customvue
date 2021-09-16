let uid=0
export default class Dep{
    constructor(){
        console.log('this is a dep')
        this.id=uid++
        //存放的是watcher的实例
        this.subs=[]
    }
    addSub(sub){
        this.subs.push(sub)
    }
    depend(){
        if(Dep.target){
            this.addSub(Dep.target)
        }
    }
    removeSub(uid){
        this.subs.forEach((v,i)=>{
           if(v.uid===uid){
            this.subs.splice(i,1)
           }
        })
        
    }
    notify(){
        console.log('notify')
        let subs=this.subs.slice()
        subs.forEach(v=>{
            v.update()
        })
    }
}
