 module.exports = {
    mode: 'development',
    entry:  './snabbdom-learn/index.js',
    output: {
        publicPath:'/xuni/',
        filename:'main.js'
    },
    devServer: {
        open: true,
        host: 'localhost.jd.com',
        hot: true,  
        port:8060,
        contentBase: './snabbdom-learn'    
    },
    devtool: 'eval-source-map',
    
};
