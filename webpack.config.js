var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        'uploadcore': './src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        libraryTarget: "umd",
        filename: "[name].js",
        library: "UploadCore",
        sourceMapFilename: "[file].map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ['', '.js']
    }
};
