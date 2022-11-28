const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// console.log(path.resolve(__dirname, 'app'));   هذا الكود لحل مشكلة المسار

module.exports = {

    entry: {
        'app': './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js'
    },

    devServer: {

        static : {
            directory: path.join(__dirname, "/app"),
        },
        port: 8081,
        compress: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                        }
                    }
                ]
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new OptimizeCSSAssetsPlugin({}),
    ]
}
