require('es6-promise').polyfill();
path = require('path')

module.exports = {
    devtool: "source-map",
    entry: "./main.jsx",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".jsx", ".js"],
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react' ]
            },
            {test: /\.sass$/, loaders: ["style", "css?sourceMap", "sass?indentedSyntax,sourceMap"]},
            {test: /\.(gif|png|jpg)$/, loader: 'url?limit=50000&name=resources/images/[name].[ext]&mimeType=image/[ext]'}

        ]
    }
};
