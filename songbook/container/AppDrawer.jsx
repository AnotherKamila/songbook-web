import React from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import {Divider, Drawer, List, ListItem, makeSelectable} from 'material-ui'

import ExploreIcon  from 'material-ui/svg-icons/action/explore'
import HomeIcon     from 'material-ui/svg-icons/action/home'
import FeedbackIcon from 'material-ui/svg-icons/action/feedback'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

import {name2path} from '../activities'

const PUBLIC_LIST = '/book/public_list'

const LEFT_NAV_TOP = [
    {name: 'home',   link: '/',         icon: <HomeIcon/>},
    {name: 'public', link: PUBLIC_LIST, icon: <ExploreIcon/>}
]
const LEFT_NAV_BOT = [
    {name: 'settings', link: '/settings', icon: <SettingsIcon/>},
    {name: 'feedback', link: '/feedback', icon: <FeedbackIcon/>}
]

const nav_list_item = ({name, link, icon}) => (
        <ListItem key={name}
                  leftIcon={icon}
                  primaryText={<FormattedMessage id={name+'.title'} />}
                  value={link} />
)

const SelectableList = makeSelectable(List);

export const AppDrawer = (props) => (
    <Drawer docked={false}
            open={props.open}
            onRequestChange={props.onOpenRequestChange}
            className="app-drawer">

        <SelectableList value={props.location.pathname} onChange={props.onNavRequestChange}>
            {LEFT_NAV_TOP.map(item => nav_list_item(item))}
            <Divider />
            {LEFT_NAV_BOT.map(item => nav_list_item(item))}
        </SelectableList>
    </Drawer>
)
AppDrawer.propTypes = {
    open: React.PropTypes.bool.isRequired,
    onOpenRequestChange: React.PropTypes.func,
    onNavRequestChange: React.PropTypes.func,
}
