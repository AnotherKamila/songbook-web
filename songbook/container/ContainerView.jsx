import React from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import {AppBar, IconButton, IconMenu, MenuItem, TextField} from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {match_activity} from '../activities'
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

export const ContainerView = (props) => {
    let activity = match_activity('path', props.location.pathname)
    let appbar_contents = null
    if (activity.show_search) {
        const style = {
            line: {borderColor: '#839496'},
            line_focused: {borderColor: '#6'},
            hint: {color: '#839496'},
            input: {color: '#fff'},
        }
        appbar_contents = (
            <TextField hintText={<FormattedMessage id='app.search_field.hint'/>}
                       onChange={props.onSearch}
                       fullWidth={true}
                       hintStyle={style.hint}
                       inputStyle={style.input}
                       underlineStyle={style.line}
                       underlineFocusStyle={style.line_focused}
                       style={{position: 'relative', top: '-6px'}}/>
        )
    } else {
        appbar_contents = <FormattedMessage id={activity.name+'.title'} />
    }
    // stupid evil hacks... whatever :D
    return (
        <div className='songbook-container'>
            <AppBar title={appbar_contents}
                    iconElementRight={<MoreMenu/>}
                    onLeftIconButtonTouchTap={()=>props.onDrawerOpenRequestChange(true)}
                    style={{position: 'fixed', top: 0}} />

            <AppDrawer open={props.drawer_open}
                       onOpenRequestChange={props.onDrawerOpenRequestChange}
                       onNavRequestChange={props.onDrawerNavRequestChange}
                       location={props.location}
                       router={props.router}/>

            <div className='songbook-content-wrapper' style={{marginTop: '56px'}}>
                {props.children}
            </div>
        </div>
    )
}
ContainerView.propTypes = {
    children: React.PropTypes.node,
    onDrawerOpenRequestChange: React.PropTypes.func.isRequired,
    onDrawerNavRequestChange: React.PropTypes.func.isRequired,
}
