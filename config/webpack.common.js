var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: ["./app.ts"],
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
