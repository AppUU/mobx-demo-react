const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        host: 'localhost',
        port: 3000
    },
    resolve: {
        alias: {
            mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js"
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader', options: { limit: 10240 }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './index.html'
        })
    ],
    devtool: 'inline-source-map'
};
module.exports = config;