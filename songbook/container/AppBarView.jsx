import React from 'react'
import {AppBar, IconButton, IconMenu, MenuItem, TextField} from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {FormattedMessage} from 'react-intl'

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

export const AppBarView = ({title, onDrawerOpenRequest}) => (
    <AppBar title={title}
            iconElementRight={<MoreMenu/>}
            onLeftIconButtonTouchTap={()=>onDrawerOpenRequest(true)}
            style={{position: 'fixed', top: 0}} />
)
AppBarView.muiName = 'AppBar'

const search_style = {
    line: {borderColor: '#839496'},
    line_focused: {borderColor: '#fff'},
    hint: {color: '#839496'},
    input: {color: '#fff'},
}
export const SearchAppBarView = ({onSearch, query, onDrawerOpenRequest}) => (
    <AppBarView onDrawerOpenRequest={onDrawerOpenRequest}
                title={<TextField hintText={<FormattedMessage id='app.search_field.hint'/>}
                                     defaultValue={query}
                                     onChange={(e, val) => onSearch(val)}
                                     fullWidth={true}
                                     hintStyle={search_style.hint}
                                     inputStyle={search_style.input}
                                     underlineStyle={search_style.line}
                                     underlineFocusStyle={search_style.line_focused}
                                     style={{position: 'relative', top: '-6px'}} />} />
)
SearchAppBarView.muiName = 'AppBar'
