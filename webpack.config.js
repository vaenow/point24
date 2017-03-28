

var path = require("path")
var webpack = require("webpack")

module.exports = {
    entry: {
        index: path.join(__dirname, "index"),
        test: path.join(__dirname, 'test', "test")
    },
    output: {
        path: path.join(__dirname, "dist"), 
        filename: "[name].js",
        publicPath: 'dist'
    },
    loaders: [
        {
            test:/.js$/, 
            exclude: /node_modules/,
            loader: "babel",
            query: {
                preset: ['es2015']
            }
        },
        {test: /\.css$/,loader:"css"}
    ],
    devtool: 'source-map',
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
    ]
}


