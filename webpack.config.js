const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
let mode = "development";
if (process.env.NODE_ENV === "production"){
    mode = "production";
}
module.exports = {
    mode: mode,
    devtool: "source-map",
    entry: {
        app:['./src/index.js','./src/scss/main.scss'],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true,
        hot:true,
    },
    plugins: [new MiniCssExtractPlugin({
            filename:"./css/[name].css"
    }

    ),new HtmlWebpackPlugin({
        template: "./src/pug/pages/index.pug"
    }
    ),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ['url-loader'],

            },
            {
                test: /\.(woff|woff2|ttf)$/i,
                use: ['url-loader'],

            },
            {
                test: /\.pug$/i,
                use: [{
                    loader:'pug-loader',
                    options: {
                        pretty: true
                    },
                }
                ],

            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    }
}







