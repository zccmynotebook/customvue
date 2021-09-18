import Vue from './Vue'

window.vm=new Vue({
    el:'#app',
    data:{
        a:1,
        b: {
            c:{d:100}
        }
    },
    watch:{
        a(){
            console.log('watch a')
        }
    }
})
// console.log(vm.a)
// vm.a=2