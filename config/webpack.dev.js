const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var webpackConfig = {
    entry: {
        main: [
            "react-hot-loader/patch",
            "babel-runtime/regenerator",
            "babel-register",
            "webpack-hot-middleware/client?reload=true",
            "./src/main.js"
        ],
    },

    mode: "development",

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true, //live reoald
        stats:{
            colors: true
        }
    },

    optimization:{
        splitChunks:{
            chunks: "all",
            cacheGroups:{
                vendor:{
                    name:"vendor",
                    chunks: "initial",
                    minChunks:2
                }
            }
        }
    },

    module:{
        rules:[
            {//loaders para javascript
                test: /\.js$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            { 
                test: /\.scss$/,
                use:[
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, //css para js
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", //transpila sass para css
                        options: {
                            sourceMap:true,
                        }
                    }
                ]
            },

            { //loader para as imagens
                test: /\.(jpg|gif|png)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name:"images/[name]-[hash:8].[ext]"
                        }
                    }
                ]

            },
            {   //markdown loader
                test: /\.md$/,
                use:[
                    {
                        loader: "markdown-with-front-matter-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        /*
        new HTMLWebpackPlugin({
            template: "./src/index.ejs",
            inject: true,
            title: "Link's Jornal"
        }),
        */
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new BundleAnalyzerPlugin({
            generateStatsFile: false
        })
    ]   
};
module.exports = webpackConfig;