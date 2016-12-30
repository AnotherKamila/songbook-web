import React from 'react'
import ReactDOM from 'react-dom'

import {Songbook, create_store} from './songbook'

import './root.sass'

let store = create_store()
window.store = store // for debugging ONLY
let root = document.getElementById('songbook') || document.body
ReactDOM.render(<Songbook store={store}/>, root)
