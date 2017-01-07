import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {m} from '../utils'
import {SearchFieldView} from './SearchFieldView'

export const SEARCH           = createAction('search/SEARCH')
export const SET_CURRENT_BOOK = createAction('search/SET_CURRENT_BOOK')

export const search_reducer = handleActions({
    'search/SEARCH':           (state, action) => m(state, {query: action.payload}),
    'search/SET_CURRENT_BOOK': (state, action) => m(state, {current_book: action.payload}),
}, {query: '', current_book: '/book/public_songs'})

export const SearchField = connect(
    state => ({
        query: state.search.query,
        current_book: state.search.current_book,
    }),
    dispatch => ({
        on_search: (query, navigate_to) => {
            dispatch(SEARCH(query))
            if (navigate_to) dispatch(NAVIGATE_TO(navigate_to))
        },
    })
)(SearchFieldView)
