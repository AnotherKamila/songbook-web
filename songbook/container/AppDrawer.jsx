import React from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import {Divider, Drawer, List, ListItem, makeSelectable} from 'material-ui'

import ExploreIcon  from 'material-ui/svg-icons/action/explore'
import HomeIcon     from 'material-ui/svg-icons/action/home'
import FeedbackIcon from 'material-ui/svg-icons/action/feedback'
import ListIcon     from 'material-ui/svg-icons/action/list'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

import {name2path} from '../activities'

const PUBLIC_BOOKS_LIST = '/book/public_books'
const PUBLIC_SONGS_LIST = '/book/public_songs'

const LEFT_NAV_TOP = [
    {name: 'home',      link: '/',               icon: <HomeIcon/>},
    {name: 'public',    link: PUBLIC_BOOKS_LIST, icon: <ExploreIcon/>},
    {name: 'all_songs', link: PUBLIC_SONGS_LIST, icon: <ListIcon/>},
]
const LEFT_NAV_BOT = [
    {name: 'settings', link: '/settings', icon: <SettingsIcon/>},
    {name: 'feedback', link: '/feedback', icon: <FeedbackIcon/>},
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
            onRequestChange={props.onOpenRequest}
            className="app-drawer">

        <SelectableList onChange={(e, val) => {props.onOpenRequest(false); props.onNavRequest(val)}}
                        value={props.location.pathname}>
            {LEFT_NAV_TOP.map(item => nav_list_item(item))}
            <Divider />
            {LEFT_NAV_BOT.map(item => nav_list_item(item))}
        </SelectableList>
    </Drawer>
)
AppDrawer.propTypes = {
    open: React.PropTypes.bool.isRequired,
    onOpenRequest: React.PropTypes.func.isRequired,
    onNavRequest: React.PropTypes.func.isRequired,
}
