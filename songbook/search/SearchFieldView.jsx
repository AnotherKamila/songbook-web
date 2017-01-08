import React from 'react'
import {AppBar, IconButton, IconMenu, MenuItem, TextField} from 'material-ui'
import {FormattedMessage as T} from 'react-intl'

// TODO bleeergh!
const search_style = {
    line: {borderColor: '#839496'},
    line_focused: {borderColor: '#fff'},
    hint: {color: '#839496'},
    input: {color: '#fff'},
}

export const SearchFieldView = ({query, onSearch, current_book}) => (
<TextField hintText={<T id='app.search_field.hint'/>}
           value={query}
           onChange={(e, val) => onSearch(val, current_book)}
           fullWidth={true}
           hintStyle={search_style.hint}
           inputStyle={search_style.input}
           underlineStyle={search_style.line}
           underlineFocusStyle={search_style.line_focused}
           style={{position: 'relative', top: '-6px'}} />
)
SearchFieldView.propTypes = {
    query: React.PropTypes.string,
    onSearch: React.PropTypes.func.isRequired,
    current_book: React.PropTypes.string.isRequired,
}
SearchFieldView.muiName = 'TextField'
