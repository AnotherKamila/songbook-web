import React from 'react'
import { Link } from 'react-router'
import {FormattedMessage} from 'react-intl'

import {app_index} from './index.js'

import './songbook.sass'

export const Container = (props) => (
    <div className='songbook-container'>
        <header className='app-title'>
            <h1><FormattedMessage id='app.title' /></h1>
            <nav>
                {routes.map(({path, name}) => (
                    <Link key={name} to={path} activeClassName='active'>
                        <FormattedMessage id={'route.'+name} />
                    </Link>
                ))}
            </nav>
        </header>
        <div className='webui-content-wrapper'>
            {props.children}
        </div>
    </div>
)
Container.propTypes = {
    routes: React.PropTypes.array.isRequired,
    children: React.PropTypes.node,
}

export const DefaultRoute = (props) => (
    <div className='not-implemented'>TODO help / intro / redirect to home</div>
)

export default Container
