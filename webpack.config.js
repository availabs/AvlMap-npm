const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'AvlMap' : path.resolve(__dirname, 'AvlMap'),
    },
    mode:'development',
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js'
    },
    target: "node",
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
        'react': 'commonjs react',
        'fs': "require('fs')",
        'path': "require('path')",
        'resolve': "require('resolve')"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

};