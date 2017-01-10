// Collects the app's activities.
import React from 'react'

import {SearchField} from '../search'

import {Feedback} from './feedback/index.jsx'
import {Intro}    from './intro/index.jsx'
import {Fallback} from './fallback.jsx'
import {Home}     from './home/index.jsx'
import {Book, book_reducer} from './book/index.jsx'
import {Song, song_reducer} from './song/index.jsx'
import {Settings} from './settings/Settings.jsx'
import {settings_reducer} from './settings/reducer.js'

const noop_reducer = (state, _action) => (state || {})

export const app_index = [
    {name: 'book',     path: '/book/:id', component: Book,     appbar_content:  <SearchField/>,   reducer: book_reducer},
    {name: 'song',     path: '/song/:id', component: Song,     appbar_content:  <SearchField/>,   reducer: song_reducer},
    {name: 'home',     path: '/',         component: Home,     appbar_title_id: 'home.title',     reducer: noop_reducer},
    {name: 'intro',    path: '/intro',    component: Intro,    appbar_title_id: 'intro.title',     reducer: noop_reducer},
    {name: 'settings', path: '/settings', component: Settings, appbar_title_id: 'settings.title', reducer: settings_reducer},
    {name: 'feedback', path: '/feedback', component: Feedback, appbar_title_id: 'feedback.title', reducer: noop_reducer},
    {name: 'fallback', path: '*',         component: Fallback, appbar_title_id: 'fallback.title', reducer: noop_reducer}
]
