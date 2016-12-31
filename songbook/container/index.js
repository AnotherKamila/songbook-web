import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {ContainerView} from './ContainerView.jsx'
import {m} from '../utils'

///// ACTIONS /////

export const DRAWER_CHANGE = createAction('app/ui/DRAWER_CHANGE')

///// DEFAULT STATE /////

const default_state = {
    drawer_open: false,
}

///// REDUCERS /////
export const container_reducer = handleActions({
    'app/ui/DRAWER_CHANGE': (state, action) => m(state, {drawer_open: action.payload}),
}, default_state)

///// Container //////

export const Container = connect(
    state => ({
        drawer_open: state.app.container.drawer_open,
    }),
    dispatch => ({
        onDrawerOpenRequestChange: (open) => dispatch(DRAWER_CHANGE(open)),
        onDrawerNavRequestChange: (e, value) => {
            dispatch(NAVIGATE_TO(value))
            dispatch(DRAWER_CHANGE(false))
        },
        onSearch: (e, value) => {
            console.log('Search: ', value)
        },
    })
)(ContainerView)

