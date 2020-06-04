const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index')  ,
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']  // <--- !`react` must be part of presets!
                    }
                }
            },
            {
                test: /\.*css$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    externals: {
        'react': 'commonjs react'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

};