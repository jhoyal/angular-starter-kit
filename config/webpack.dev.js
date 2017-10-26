var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve("build/js/"),
        publicPath: "/assets/js/",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "src",
        noInfo: true
    }
});
