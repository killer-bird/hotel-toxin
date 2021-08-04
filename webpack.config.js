const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackCleanPlugin = require('clean-webpack-plugin')
let mode = "development";
if (process.env.NODE_ENV === "production"){
    mode = "production";
}
module.exports = {
    mode: mode,
    devtool: "source-map",
    entry: {
        // vendors: [
        //     "webpack-material-design-icons"
        // ],
        app:['./src/pug/pages/index/index.js','./src/scss/main.scss'],
        // room:['./src/pug/pages/rooms/rooms.js']

    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),


    },
    resolve: {
        alias: {
         NodeModules: path.resolve(__dirname,'./node_modules'),
         JS: path.resolve(__dirname,'./src/js'),
         SCSS: path.resolve(__dirname,'./src/scss')
        }
    },
    devServer: {
        overlay: true,
        hot:true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"./css/[name].css"
    }

    ),new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/pug/pages/index/index.pug"
    }
    ),new HtmlWebpackPlugin({
            filename: "rooms.html",
            template: "./src/pug/pages/rooms/rooms.pug"
            }
        ),new HtmlWebpackPlugin({
                filename: "sign.html",
                template: "./src/pug/pages/sign.pug"
            }
        ),new HtmlWebpackPlugin({
                filename: "reg.html",
                template: "./src/pug/pages/reg.pug"
            },
        ),new HtmlWebpackPlugin({
                filename: "room888.html",
                template: "./src/pug/pages/rooms/room888.pug"
            }
        ),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
        }),

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







