const path = require('path');
const {merge}  = require('webpack-merge')
const baseConfig=require('./webpack.base.js')
const obj= {};

['reactive','vue','template','AST'].forEach(v=>{
  obj[v]= {
    entry:  `./${v}/index.js`,
    output: {
        path: path.resolve(__dirname, `${v}dist`),
    },
  }
});

module.exports =  function(){
    return merge(baseConfig,obj[arguments[1].name])
}

