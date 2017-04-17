// This file is loaded by webpack.DefinePlugin at build time.

var GitRevisionPlugin = require('git-revision-webpack-plugin')

module.exports = {
    API_URL: JSON.stringify(process.env.API_URL || '/api/'),
    GIT_VERSION: JSON.stringify((new GitRevisionPlugin()).version()),
}
