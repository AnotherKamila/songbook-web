import {createAction, handleActions} from 'redux-actions'

import {m} from '../utils'

export const SEARCH           = createAction('search/SEARCH')
export const SET_CURRENT_BOOK = createAction('search/SET_CURRENT_BOOK')

export const search_reducer = handleActions({
    'search/SEARCH':           (state, action) => m(state, {query: action.payload}),
    'search/SET_CURRENT_BOOK': (state, action) => m(state, {current_book: action.payload}),
}, {query: '', current_book: '/book/public_songs'})
