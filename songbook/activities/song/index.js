// Views the given song (fetching it from the server).

import {connect} from 'react-redux'

import {myfetch} from '../../utils'

import {REQUEST_SONG, RECEIVE_SONG} from './actions'
import {SongView} from './SongView'


export const Song = connect(
    state => ({
        is_fetching: state.song.is_fetching,
        song:        state.song.data,
    }),
    dispatch => ({
        fetch_song: (id) => myfetch('/song/'+id)(dispatch, REQUEST_SONG(), RECEIVE_SONG),
    })
)(SongView)
