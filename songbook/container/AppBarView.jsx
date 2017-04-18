import React from 'react'
import {AppBar, IconButton, IconMenu, MenuItem, TextField} from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {FormattedMessage as T} from 'react-intl'

import {m} from '../utils'

// TODO :D
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

export const AppBarView = ({content, title_id, onDrawerOpenRequest, style}) => (
    <AppBar title={content ? content : <T id={title_id ? title_id : 'TODO'} />}
            iconElementRight={<MoreMenu/>}
            onLeftIconButtonTouchTap={()=>onDrawerOpenRequest(true)}
            style={m(style, {position: 'fixed', top: 0})} />
)
AppBarView.propTypes = {
    content:             React.PropTypes.element,
    title_id:            React.PropTypes.string,
    onDrawerOpenRequest: React.PropTypes.func.isRequired,
}
AppBarView.muiName = 'AppBar'
