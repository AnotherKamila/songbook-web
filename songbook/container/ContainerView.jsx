import React from 'react'
import {FormattedMessage} from 'react-intl'

import {AppBarView} from './AppBarView.jsx'
import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

export const ContainerView = (props) => {
    return (
        <div className='songbook-container'>
            <AppBarView onDrawerOpenRequest={props.onDrawerOpenRequest}
                        content={props.children.props.route.appbar_content}
                        title_id={props.children.props.route.appbar_title_id} />
            <AppDrawer open={props.drawer_open}
                       onOpenRequest={props.onDrawerOpenRequest}
                       onNavRequest={props.onDrawerNavRequest}
                       location={props.location}
                       router={props.router}/>
                {props.children}
        </div>
    )
}
ContainerView.propTypes = {
    children: React.PropTypes.node,
    onDrawerOpenRequest: React.PropTypes.func.isRequired,
    onDrawerNavRequest: React.PropTypes.func.isRequired,
}
