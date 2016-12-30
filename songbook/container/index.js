import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'

import {ContainerView} from './Container.jsx'
import {m} from '../utils'
import {path2name} from '../activities'

///// ACTIONS /////

export const DRAWER_TOGGLE = createAction('app/ui/DRAWER_TOGGLE')

///// DEFAULT STATE /////

const default_state = {
    drawer_open: false,
}

///// REDUCERS /////
export const container_reducer = handleActions({
    'app/ui/DRAWER_TOGGLE': (state, _action) => m(state, {drawer_open: !state.drawer_open}),
}, default_state)

///// Container //////

export const Container = connect(
    state => ({
        current_activity: {
            name: path2name(state.routing.locationBeforeTransitions.pathname),
        },
        drawer_open: state.app.container.drawer_open,
    }),
    dispatch => ({
        onDrawerRequestToggle: () => dispatch(DRAWER_TOGGLE()),
    })
)(ContainerView)

