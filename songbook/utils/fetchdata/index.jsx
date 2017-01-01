import React from 'react'
import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'

import {m, myfetch} from '../../utils'
import {FetchDataView} from './FetchDataView'

export function with_data(state_path, component) {
    if (typeof state_path == 'string') state_path = [state_path]
    const ident = state_path.join('/')

    const REQUEST = createAction(ident+'/REQUEST')
    const RECEIVE = createAction(ident+'/RECEIVE')

    let actions = {}
    actions[ident+'/REQUEST'] = (state, action) => m(state, {is_fetching: true})
    // actions[ident+'/RECEIVE'] = (state, action) => ({data: action.payload, is_fetching: false})
    actions[ident+'/RECEIVE'] = (state, action) => m(state, {data: action.payload, is_fetching: false})
    const reducer = handleActions(actions, {is_fetching: true, data: null})

    function extract_state(state) {
        let mystate = state
        state_path.forEach((component) => mystate = state[component])
        return mystate
    }

    return {
        reducer: reducer,
        Component: connect(
            state => ({
                is_fetching: extract_state(state).is_fetching,
                data:        extract_state(state).data,
            }),
            dispatch => ({
                fetch: (url) => myfetch(url)(dispatch, REQUEST(), RECEIVE),
            })
        )(FetchDataView),
    }
}
