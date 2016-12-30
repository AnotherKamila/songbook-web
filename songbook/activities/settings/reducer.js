/*
state shape:

language :: string
*/

import {handleActions} from 'redux-actions'
import {m} from '../../utils'
import {default_state} from './settings'

export const settings_reducer = handleActions({
    'settings/CHANGE': (state, action) => m(state, action.payload),
}, default_state)

export default settings_reducer
