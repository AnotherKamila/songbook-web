import React from 'react'
import {FormattedMessage} from 'react-intl'

import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

export const ContainerView = (props) => {
    return (
        <div className='songbook-container'>
            <AppDrawer open={props.drawer_open}
                       onOpenRequestChange={props.onDrawerOpenRequestChange}
                       onNavRequestChange={props.onDrawerNavRequestChange}
                       location={props.location}
                       router={props.router}/>
                {props.children}
        </div>
    )
}
ContainerView.propTypes = {
    children: React.PropTypes.node,
    onDrawerOpenRequestChange: React.PropTypes.func.isRequired,
    onDrawerNavRequestChange: React.PropTypes.func.isRequired,
}
