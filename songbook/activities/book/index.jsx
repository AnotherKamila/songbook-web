// Just calls `songbook_view` with the home URL (and manages
// `state.home_url`). Maybe might allow logging to sync `home_url` and edit
// keys some day.

// Displays public songbooks (fetching them from the server).

import React from 'react'
import {connect} from 'react-redux'

import {with_data} from '../../utils/fetchdata'

import {push as NAVIGATE_TO} from 'react-router-redux'
import {BookView} from './BookView'


const {Component, reducer} = with_data('book')
export const book_reducer = reducer
const BookFetcher = (props) => <Component url={'/book/'+props.params.id}
                                          component={BookView}
                                          {...props} />

export const Book = connect(
    state => ({}),
    dispatch => ({
        onNavRequest: (e, value) => dispatch(NAVIGATE_TO(value)),
        onSearch: (e, value) => (console.log('[book] Search: ', value)),
    })
)(BookFetcher)
