import parse from './parse.js'
import render from './render.js'
window.Template = {
    render(str,data){
        let tokens=parse(str)
        document.body.innerHTML=render(tokens,data)
    }
}

window.Template.render('我来自{{city}},是{{company}}人', {city:'北京',company:'中国'})