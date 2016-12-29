require('es6-promise').polyfill();
path = require('path')

module.exports = {
    devtool: "source-map",
    entry: './main.jsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ["", ".jsx", ".js", ".css"],
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel' ]
            },
            {test: /\.sass$/, loaders: ["style", "css?sourceMap", "sass?indentedSyntax,sourceMap"]},
            {test: /\.(gif|png|jpg)$/, loader: 'url?limit=50000&name=resources/images/[name].[ext]&mimeType=image/[ext]'},
            {test: /\.svg$/, loader: 'svg-url-loader'},
            {test: /\.ya?ml$/, loaders: ['json', 'yaml']}

        ]
    }
};
