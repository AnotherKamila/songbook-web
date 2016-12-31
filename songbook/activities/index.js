// Collects the app's activities.

import {BookView}  from './book/BookView'
import {Feedback}  from './feedback/Feedback.jsx'
import {Home}      from './home/Home.jsx'
import {Intro}     from './intro/Intro.jsx'
import {Settings}  from './settings/Settings.jsx'
import {Song}      from './song'
import {Songbooks} from './songbooks/Songbooks'
import {settings_reducer} from './settings/reducer.js'
import {song_reducer}     from './song/reducer.js'

const noop_reducer = (state, _action) => (state || {})

const FALLBACK = {name: 'intro', path: '*', component: Intro, reducer: noop_reducer}

export const app_index = [
    {name: 'book',      path: '/book/:id',  component: BookView,  reducer: noop_reducer, show_search: true},
    {name: 'song',      path: '/song/:id',  component: Song,      reducer: song_reducer, show_search: true},
    {name: 'home',      path: '/',          component: Home,      reducer: noop_reducer, show_search: true},
    {name: 'songbooks', path: '/songbooks', component: Songbooks, reducer: noop_reducer},
    {name: 'settings',  path: '/settings',  component: Settings,  reducer: settings_reducer},
    {name: 'feedback',  path: '/feedback',  component: Feedback,  reducer: noop_reducer},
    FALLBACK,
]

export function match_activity(key, query) {
    let r = FALLBACK
    app_index.forEach(a => {if (a[key] == query) r = a})
    return r
}

export function path2name(query) {
    return match_activity('path', query)['name']
}

export function name2path(query) {
    return match_activity('name', query)['path']
}
