// Generated using webpack-cli http://github.com/webpack-cli
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        host: 'localhost.jd.com',
        hot: true,  
        port:8000    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },
        ],
    },
    resolve:{
        extensions: [".js"],
        alias: Object.assign({}, alias, {
            "@": path.resolve(__dirname, ".."),
        }),
    }
};
