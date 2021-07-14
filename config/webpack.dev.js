const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.esbuild');

module.exports = function () {
    return merge(commonConfig(), {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            hot: true,
            open: true
        }
    })
};