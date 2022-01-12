const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    target: "web",
    mode: 'development',
    entry: {
        'fck-components-example': path.resolve(__dirname, 'src','index.tsx'),
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
            template: path.resolve(__dirname, "./index.html"), 
            filename: `./fck-components-example.html`,        
            chunks: ['fck-components-example'],                         
        })
    ],
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {  directory: path.join(__dirname, 'dist') },
        host: "localhost",
        compress: true, port: 3000, hot: true, open: true, 
        historyApiFallback:{
            disableDotRule: false,
            rewrites: [  
                { from: "^/", to: "/fck-components-example.html"},            
            ]
        },
    }
};




