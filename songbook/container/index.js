import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {ContainerView} from './ContainerView.jsx'
import {AppBarView, SearchAppBarView} from './AppBarView.jsx'
import {m} from '../utils'

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
        onDrawerOpenRequestChange: (open) => dispatch(DRAWER_OPEN(open)),
        onDrawerNavRequestChange: (e, value) => {
            dispatch(NAVIGATE_TO(value))
            dispatch(DRAWER_OPEN(false))
        },
    })
)(ContainerView)

export const AppBar = connect(
    state => ({}),
    dispatch => ({
        onDrawerOpenRequest: (open) => dispatch(DRAWER_OPEN(open)),
    })
)(AppBarView)

export const SearchAppBar = connect(
    state => ({}),
    dispatch => ({
        onDrawerOpenRequest: (open) => dispatch(DRAWER_OPEN(open)),
    })
)(SearchAppBarView)

