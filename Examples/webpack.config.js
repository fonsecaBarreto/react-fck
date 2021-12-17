const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {

    target: "web",
    mode: 'development',
    entry: {
        'example': path.resolve(__dirname, 'src', 'index.tsx'),
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                include: [ path.resolve(__dirname,"src") ],
                use:  "babel-loader",
            },
            {
                test: /\.(ts|tsx)?$/,
                use: [{
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }],
                include: [  path.resolve(__dirname, 'src') ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ]
    },

         
    plugins: [

        new CleanWebpackPlugin(path.join(__dirname, 'dist')),

        new HtmlWebpackPlugin({
            template: "./public/index.html",  // Html Raiz
            filename: `./index.html`,        // Distribuição Final
            chunks: ['example'],                          // chuck Js
        })
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, port: 3000, hot: true, open: true, 
    },


};




