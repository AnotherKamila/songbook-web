// Just calls `songbook_view` with the home URL (and manages
// `state.home_url`). Maybe might allow logging to sync `home_url` and edit
// keys some day.

// Displays public songbooks (fetching them from the server).

import React from 'react'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {with_data} from '../../utils/fetchdata'
import {SEARCH, SET_CURRENT_BOOK} from '../../search'
import {BookView} from './BookView'


const {Component, reducer} = with_data('book')
export const book_reducer = reducer
const BookFetcher = (props) => <Component url={'/book/'+props.params.id}
                                          component={BookView}
                                          {...props} />

export const Book = connect(
    state => ({
        query: state.search.query,
        current_book: state.search.current_book,
    }),
    dispatch => ({
        on_new_props: (old_props, props) => {
            if (props.current_book != props.url) dispatch(SET_CURRENT_BOOK(props.url))
        },
        on_nav_request: (value) => {
            dispatch(NAVIGATE_TO(value))
            dispatch(SEARCH('')) // clear search
        },
    })
)(BookFetcher)
