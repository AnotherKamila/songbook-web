import React from 'react'
import ReactDOM from 'react-dom'
import Songbook from './ui/Songbook.jsx'
import './main.sass'

console.log('=====', 'loaded', new Date(), '=====')
var root = document.getElementById('songbook') || document.body
ReactDOM.render(<Songbook />, root)
