import Songbook from './songbook/Songbook.jsx'
import './main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'webpack-zepto'

var root = document.getElementById('songbook') || document.body
$.get('/API_URL.conf', (response) => {
    response = response.trim()
    console.log('=====', 'loaded', new Date(), '=====')
    console.log('API URL:', response)
    ReactDOM.render(<Songbook api_url={response} />, root)
})
