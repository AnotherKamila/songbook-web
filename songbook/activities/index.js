// Collects the app's activities.

import {Feedback} from './feedback/index.jsx'
import {Home}     from './home/index.jsx'
import {Intro}    from './intro/index.jsx'
import {Book, book_reducer} from './book/index.jsx'
import {Song, song_reducer} from './song/index.jsx'
import {Settings} from './settings/Settings.jsx'
import {settings_reducer} from './settings/reducer.js'

const noop_reducer = (state, _action) => (state || {})

const FALLBACK = {name: 'intro', path: '*', component: Intro, reducer: noop_reducer}

export const app_index = [
    {name: 'book',     path: '/book/:id', component: Book,     reducer: book_reducer},
    {name: 'song',     path: '/song/:id', component: Song,     reducer: song_reducer},
    {name: 'home',     path: '/',         component: Home,     reducer: noop_reducer},
    {name: 'settings', path: '/settings', component: Settings, reducer: settings_reducer},
    {name: 'feedback', path: '/feedback', component: Feedback, reducer: noop_reducer},
    FALLBACK,
]
