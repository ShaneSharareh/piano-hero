const path = require('path')
module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, "src/js", "game.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
               }
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                ]
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    target: 'node'
}