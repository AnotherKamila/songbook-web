import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {m} from '../utils'
import {SEARCH} from '../search'
import {ContainerView} from './ContainerView.jsx'

///// actions /////

export const DRAWER_OPEN = createAction('app/ui/DRAWER_OPEN')

///// default state /////

const default_state = {
    drawer_open: false,
}

///// reducers /////
export const container_reducer = handleActions({
    'app/ui/DRAWER_OPEN': (state, action) => m(state, {drawer_open: action.payload}),
}, default_state)

///// components //////

export const Container = connect(
    state => ({
        drawer_open: state.app.container.drawer_open,
    }),
    dispatch => ({
        onDrawerOpenRequest: (open) => dispatch(DRAWER_OPEN(open)),
        onDrawerNavRequest: (e, value) => {
            dispatch(SEARCH('')) // clear search
            dispatch(NAVIGATE_TO(value))
            dispatch(DRAWER_OPEN(false))
        },
    })
)(ContainerView)
