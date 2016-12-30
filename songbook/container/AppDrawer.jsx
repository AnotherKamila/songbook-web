import React from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import {Divider, Drawer, IconButton, MenuItem} from 'material-ui'

import ExploreIcon  from 'material-ui/svg-icons/action/explore'
import HomeIcon     from 'material-ui/svg-icons/action/home'
import FeedbackIcon from 'material-ui/svg-icons/action/feedback'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

import {name2path} from '../activities'

import './app-drawer.sass'

const LEFT_NAV_TOP = [{name: 'home', icon: <HomeIcon/>}, {name: 'songbooks', icon: <ExploreIcon/>}]
const LEFT_NAV_BOT = [{name: 'settings', icon: <SettingsIcon/>}, {name: 'feedback', icon: <FeedbackIcon/>}]

const nav_list_item = (name, icon, onTouchTap) => (
    <Link key={name} to={name2path(name)} activeClassName='active'>
        <MenuItem leftIcon={icon} onTouchTap={onTouchTap}>
            <FormattedMessage id={name+'.title'} />
        </MenuItem>
    </Link>
)

export const AppDrawer = ({open, onRequestChange}) => (
    <Drawer docked={false}
            open={open}
            onRequestChange={onRequestChange}
            className="app-drawer">
        <div className="drawer-list-top">
            {LEFT_NAV_TOP.map(({name, icon}) => nav_list_item(name, icon, onRequestChange))}
        </div>
        <Divider />
        <div className="drawer-list-bot">
            {LEFT_NAV_BOT.map(({name, icon}) => nav_list_item(name, icon, onRequestChange))}
        </div>
    </Drawer>
)
AppDrawer.propTypes = {
    open: React.PropTypes.bool.isRequired,
    onRequestChange: React.PropTypes.func,
}
