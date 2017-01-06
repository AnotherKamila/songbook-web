import React from 'react'
import Fuse from 'fuse.js'
import {FormattedMessage} from 'react-intl'
import {IconButton, List, ListItem, Paper, Subheader, makeSelectable} from 'material-ui'
import ActionFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import {SearchAppBar} from '../../container'
import {asciify, m} from '../../utils'

const SelectableList = makeSelectable(List);

const fuse_options = {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [{name: 'title', weight: 0.7}, {name: 'artist', weight: 0.3}]
}

export const BookView = ({data, onNavRequest, onSearch, query, url}) => {
    // console.log('search query:', query)
    let items = data.contents
    let has_funnychars = (asciify(query) != query)
    if (query) {
        let fuse = new Fuse(data.contents, m({
            getFn: (obj, path) => (has_funnychars ? obj[path] : asciify(obj[path])),
        }, fuse_options))
        items = fuse.search(query)
        if (items.length == 1) onNavRequest(items[0].ref)
    }
    return (
        <div className="content-wrapper">
            <SearchAppBar query={query} onSearch={onSearch} />
            <div className='content padded'>
                <Paper className="paper-responsive">
                    <SelectableList onChange={(e, val) => onNavRequest(val)}>
                        <Subheader><FormattedMessage id='book.top-message' /></Subheader>
                        <Subheader className="not-implemented">Actually, it is not implemented yet.</Subheader>
                        {items.map(({error, title, artist, ref}) => (
                            <ListItem key={ref}
                                      primaryText={title ? title : ref}
                                      secondaryText={error ? 'Error: '+error : artist}
                                      rightIconButton={<IconButton>{false ? <ActionFavoriteIcon/> : <ActionFavoriteBorderIcon/>}</IconButton>}
                                      value={ref}/>
                        ))}
                    </SelectableList>
                </Paper>
            </div>
        </div>
    )
}
