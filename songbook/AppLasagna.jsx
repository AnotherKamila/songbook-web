import React from 'react'

import thunkMiddleware from 'redux-thunk'
import {combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import sk from 'react-intl/locale-data/sk'

import { Container, DefaultRoute } from './Container.jsx'

export const init = (store) => {
    addLocaleData([...en, ...sk])
}

export const middleware = applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
)

const AppFilling = ({store, routes}) => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={syncHistoryWithStore(hashHistory, store)}>
                <Route component={Container}>
                    {routes.map(({name, path, component}) => <Route key={name} path={path} component={component}/>)}
                    <Route path='*' component={DefaultRoute} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
)
AppFilling.propTypes = {
    store: React.PropTypes.object.isRequired,
    routes: React.PropTypes.array.isRequired,
}

// split into two layers so that poor react-router isn't confused about some
// (irrelevant) property changes
export const AppLasagna = (props) => (
   <IntlProvider locale={props.language} messages={props.messages}>
        <AppFilling {...props} />
    </IntlProvider>
)
AppLasagna.propTypes = {
    store: React.PropTypes.object.isRequired,
    language: React.PropTypes.string.isRequired,
    messages: React.PropTypes.object.isRequired,
}
