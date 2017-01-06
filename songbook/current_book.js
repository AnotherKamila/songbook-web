import {createAction, handleActions} from 'redux-actions'

export const SET_CURRENT = createAction('current_book/SET_CURRENT')

export const current_book_reducer = handleActions({
    'current_book/SET_CURRENT': (state, action) => action.payload,
}, '/book/public_songs')
