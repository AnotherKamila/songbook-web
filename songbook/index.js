import {connect} from 'react-redux'
import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {routerReducer} from 'react-router-redux'

import {AppLasagna, init, middleware} from './AppLasagna'

import Settings   from './settings/Settings.jsx'
import MySongbook from './my_songbook/MySongbook.jsx'
import settings_reducer    from './settings/reducer.js'
import my_songbook_reducer from './my_songbook/reducer.js'

import messages from '../translations/messages.yml'

export function create_store() {
    let store = createStore(combineReducers({
                                settings: settings_reducer,
                                routing:  routerReducer,
                            }), middleware)
    init(store)
    return store
}

const app_index = [
    {name: 'home'    , path: '/',        component: MySongbook, reducer: my_songbook_reducer},
    {name: 'settings', path: 'settings', component: Settings,   reducer: settings_reducer},
]

export const Songbook = connect(state => ({
    language: state.settings.language,
    messages: messages[state.settings.language],
    routes: app_index,
}))(AppLasagna)
