const path = require('path');
const {merge}  = require('webpack-merge')
const baseConfig=require('./webpack.base.js')
const obj= {};

['reactive','vue','template','AST','diff'].forEach(v=>{
  obj[v]= {
    entry:  `./${v}/index.js`,
    output: {
        path: path.resolve(__dirname, `${v}dist`),
    },
  }
});

module.exports =  function(server,{name}){
    return merge(baseConfig,obj[name])
}

