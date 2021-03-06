var webpack = require('webpack');
var config = require('./config');
var merge = require('lodash/merge');
var sBase = config.sBase;

process.noDeprecation = true;
module.exports = {
    entry: config.entry,
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        // loaders: [
        //     {test: /\.(js|jsx)$/, loader: "babel", exclude: /node_modules/},
        //     {test: /\.(html)$/, loader: 'html'},
        //     {test: /\.vue$/, loader: 'vue'},
        //     {
        //         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //         loader: 'url',
        //         query: {
        //             limit: 1,
        //             name:'/static/fonts/[name].[ext]'
        //         }
        //     }
        // ],
        rules: [
            {test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.(html)$/, loader: 'html-loader'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     postcss: aPostcss
        // })
    ],
    resolve:{
        modules: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['.vue','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}