var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
}