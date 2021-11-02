const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',


    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
}