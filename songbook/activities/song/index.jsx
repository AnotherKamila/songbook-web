// Views the given song (fetching it from the server).

import React from 'react'
import {connect} from 'react-redux'

import {with_data} from '../../utils/fetchdata'
import {SongView} from './SongView'

const {Component, reducer} = with_data('song')
export const song_reducer = reducer
const SongFetcher = (props) => <Component url={'/song/'+props.params.id}
                                          component={SongView}
                                          {...props} />

export const Song = connect(
    state => ({}),
    dispatch => ({
        onSearch: (e, value) => (console.log('[song] Search: ', value)),
    })
)(SongFetcher)
