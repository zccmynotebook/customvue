const path = require('path');
const {merge}  = require('webpack-merge')
const baseConfig=require('./webpack.base.js')
module.exports =  merge(baseConfig,{
    entry: './reactive/index.js',
    output: {
        path: path.resolve(__dirname, 'reactivedist'),
    },
})