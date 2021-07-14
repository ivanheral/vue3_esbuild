var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');
const {
    ESBuildPlugin
} = require('esbuild-loader');

module.exports = function () {
    return {
        entry: {
            app: path.resolve(__dirname, '../src/ts/app.ts')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].bundle.js',
            chunkFilename: "chunk.[contenthash].js",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".vue"]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }, {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'ts',
                        target: 'es2015'
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ]
        },
        plugins: [
            new ESBuildPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/html/index.html')
            }),
            new VueLoaderPlugin()
        ]
    }
};