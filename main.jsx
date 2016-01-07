ReactDOM = require('react-dom')
Songbook = require('./ui/Songbook.jsx')
require('./main.sass')

console.log('=====', 'loaded', new Date(), '=====')
var root = document.getElementById('songbook') || document.body
ReactDOM.render(<Songbook />, root)
