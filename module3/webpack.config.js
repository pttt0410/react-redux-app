const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  path.resolve(__dirname,'./src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development',

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
     
    ],

    module: {
        rules: [
            // {
            //     test: /\.(js)$/,
            //     use: 'babel-loader',
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
   
    stats: {
        children: true,
        errorDetails: true
    },
    // module: {
    //     rules: [
            
    //     ]
    // }

}