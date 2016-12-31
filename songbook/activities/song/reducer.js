/*
state shape:

is_fetching :: bool
song        :: song object
*/

import {handleActions} from 'redux-actions'

import {m} from '../../utils'

const default_state = {is_fetching: false, song: null}

export const song_reducer = handleActions({
    'song/REQUEST_SONG': (state, action) => m(state, {is_fetching: true}),
    'song/RECEIVE_SONG': (state, action) => ({is_fetching: false, song: action.payload}),
}, default_state)
