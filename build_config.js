// This file is loaded by webpack.DefinePlugin at build time.

var GitRevisionPlugin = require('git-revision-webpack-plugin')

const conf = {
    API_URL:                 process.env.API_URL || '/api/',
    GIT_VERSION:             (new GitRevisionPlugin()).version(),
    GOOGLE_SIGNIN_CLIENT_ID: '847234303594-85ant6smt3c3ahnm5283l4u9bfennsgq.apps.googleusercontent.com',

}

let real_conf = {}
for (let k of Object.keys(conf)) real_conf[k] = JSON.stringify(conf[k])
module.exports = real_conf
