import {connect} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {routerReducer} from 'react-router-redux'

import {search_reducer} from './search'
import {app_index} from './activities/index.jsx'
import {AppLasagna, init, middleware} from './AppLasagna'

export function create_store() {
    let reducers = {
        routing: routerReducer,
        search: search_reducer,
    }
    app_index.forEach(({name, reducer}) => {reducers[name] = reducer})
    let store = createStore(combineReducers(reducers), middleware)
    init(store)
    return store
}

export const Songbook = connect(state => ({
    settings: state.settings,
    routes: app_index,
}))(AppLasagna)

