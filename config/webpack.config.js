'use strict';
process.traceDeprecation = true;

const config = require('config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appEnv = config.get('appEnv');
const contextRoot = config.get('contextRoot');
const contextPath = path.resolve(__dirname, '..', 'src', 'client');
const outputPath = path.resolve(__dirname, '..', `www-${appEnv}`);

console.log('========================================');
console.log(JSON.stringify({ contextRoot }, null, 4));
console.log('========================================');

module.exports = {
    context: contextPath,
    entry: ['./app.js'],
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: contextRoot
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },

            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {

                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }

                    }]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            CONTEXT_ROOT: JSON.stringify(contextRoot)
        }),
        new HtmlWebpackPlugin({
            title: 'Grad Tracker',
            favicon: '../server/template/favicon.ico',
            template: '../server/template/index.html'
        })
    ]
};
