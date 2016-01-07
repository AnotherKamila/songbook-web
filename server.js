var express = require('express');
var path = require('path');

var app = express()
//var publicPath = path.resolve(__dirname, 'public')
var publicPath = path.resolve(__dirname)
app.use(express.static(publicPath));
app.listen(process.env.PORT)
