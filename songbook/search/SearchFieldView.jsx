import React from 'react'
import {AppBar, IconButton, IconMenu, MenuItem, TextField} from 'material-ui'
import muiThemeable from 'material-ui/styles/muiThemeable'
import {FormattedMessage as T} from 'react-intl'

// Bleeergh!
const rgba = (hex, alpha) => (
    'rgba(' + parseInt(hex.slice(1, 3), 16) + ',' +
              parseInt(hex.slice(3, 5), 16) + ',' +
              parseInt(hex.slice(5, 7), 16) + ',' +
              alpha + ')'
)

const SearchFieldView_ = ({query, onSearch, current_book, muiTheme}) => (
<TextField hintText={<T id='app.search_field.hint'/>}
           hintStyle={{color: rgba(muiTheme.appBar.textColor, 0.5)}}
           underlineStyle={{borderColor: rgba(muiTheme.appBar.textColor, 0.5)}}
           inputStyle={{color: muiTheme.appBar.textColor}}
           underlineFocusStyle={{borderColor: muiTheme.appBar.textColor}}
           value={query}
           onChange={(e, val) => onSearch(val, current_book)}
           fullWidth={true}
           style={{position: 'relative', top: '-6px'}} />
)
SearchFieldView_.muiName = 'TextField'
SearchFieldView_.propTypes = {
    query: React.PropTypes.string,
    onSearch: React.PropTypes.func.isRequired,
    current_book: React.PropTypes.string.isRequired,
}

export const SearchFieldView = muiThemeable()(SearchFieldView_)
