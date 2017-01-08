import {connect} from 'react-redux'
import {push as NAVIGATE_TO} from 'react-router-redux'

import {SEARCH} from '../search'
import {ContainerView} from './ContainerView.jsx'

export const Container = connect(
    state => ({}),
    dispatch => ({
        onDrawerNavRequest: (value) => {
            dispatch(SEARCH('')) // clear search
            dispatch(NAVIGATE_TO(value))
        },
    })
)(ContainerView)
