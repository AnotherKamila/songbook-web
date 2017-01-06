import {connect} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {routerReducer} from 'react-router-redux'

import {search_reducer} from './search'
import {current_book_reducer} from './current_book'
import {app_index} from './activities'
import {AppLasagna, init, app_reducer, middleware} from './AppLasagna'

export function create_store() {
    let reducers = {
        app: app_reducer,
        routing: routerReducer,
        search: search_reducer,
        current_book: current_book_reducer,
    }
    app_index.forEach(({name, reducer}) => {reducers[name] = reducer})
    let store = createStore(combineReducers(reducers), middleware)
    init(store)
    return store
}

export const Songbook = connect(state => ({
    language: state.settings.language,
    routes: app_index,
}))(AppLasagna)

