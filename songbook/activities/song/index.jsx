// Views the given song (fetching it from the server).

import React from 'react'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {with_data} from '../../utils/fetchdata'
import {SEARCH} from '../../search'
import {SongView} from './SongView'

const {Component, reducer} = with_data('song')
export const song_reducer = reducer
const SongFetcher = (props) => <Component url={'/song/'+props.params.id}
                                          component={SongView}
                                          {...props} />

export const Song = connect(
    state => ({
        return_to: state.current_book,
    }),
    dispatch => ({})
)(SongFetcher)
