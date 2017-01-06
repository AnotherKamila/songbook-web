import {createAction, handleActions} from 'redux-actions'

export const SEARCH = createAction('search/SEARCH')

export const search_reducer = handleActions({
    'search/SEARCH': (state, action) => action.payload,
}, '')
