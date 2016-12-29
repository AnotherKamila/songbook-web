import React from 'react'
import ReactDOM from 'react-dom'

import {Songbook, create_store} from './songbook'

import './root.sass'

const store = create_store()
window.store = store // for debugging
let root = document.getElementById('songbook') || document.body
ReactDOM.render(<Songbook store={store}/>, root)
