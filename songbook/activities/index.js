// Collects the app's activities.

import Settings         from './settings/Settings.jsx'
import settings_reducer from './settings/reducer.js'
import Home             from './home/Home.jsx'
import home_reducer     from './home/reducer.js'
import Intro            from './intro/Intro.jsx'
import intro_reducer    from './intro/reducer.js'

const noop_reducer = (state, _action) => (state || {})

const FALLBACK = {name: 'intro', path: '*', component: Intro, reducer: noop_reducer}

export const app_index = [
    {name: 'home'    , path: '/',         component: Home,     reducer: noop_reducer},
    {name: 'settings', path: '/settings', component: Settings, reducer: settings_reducer},
    FALLBACK,
]

export function path2name(q) {
    let r = FALLBACK.name
    app_index.forEach(({name, path}) => {
        if (q == path) r = name
    })
    return r
}

export function name2path(q) {
    let r = FALLBACK.path
    app_index.forEach(({name, path}) => {
        if (q == name) r = path
    })
    return r
}
