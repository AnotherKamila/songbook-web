import React from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import {AppBar, IconButton, Menu, IconMenu, MenuItem} from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

const MoreMenu = (props) => (
    <IconMenu {...props}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
    <MenuItem primaryText="TODO" />
    <MenuItem primaryText="stuff" />
    <MenuItem primaryText="here" />
  </IconMenu>
);
MoreMenu.muiName = 'IconMenu';

export const ContainerView = (props) => (
    <div className='songbook-container'>
        <AppBar title={<FormattedMessage id={props.current_activity.name+'.title' }/>}
                iconElementRight={<MoreMenu/>}
                onLeftIconButtonTouchTap={props.onDrawerRequestToggle}/>

        <AppDrawer open={props.drawer_open}
                   onRequestChange={props.onDrawerRequestToggle}/>

        <div className='songbook-content-wrapper'>
            {props.children}
        </div>
    </div>
)
ContainerView.propTypes = {
    current_activity: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
}
