import React from 'react'
import {FormattedMessage} from 'react-intl'
import {IconButton, List, ListItem, Paper, Subheader, makeSelectable} from 'material-ui'
import ActionFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import {SearchAppBar} from '../../container'

const SelectableList = makeSelectable(List);

export const BookView = ({data, onNavRequest, onSearch}) => (
    <div className="content-wrapper">
        <SearchAppBar onSearch={onSearch} />
        <div className='content padded'>
            <Paper className="paper-responsive">
                <SelectableList onChange={onNavRequest}>
                    <Subheader><FormattedMessage id='book.top-message' /></Subheader>
                    <Subheader className="not-implemented">Actually, it is not implemented yet.</Subheader>
                    {data.contents.map(({title, artist, ref}) => (
                        <ListItem key={ref}
                                  primaryText={title}
                                  secondaryText={artist}
                                  rightIconButton={<IconButton>{false ? <ActionFavoriteIcon/> : <ActionFavoriteBorderIcon/>}</IconButton>}
                                  value={ref}/>
                    ))}
                </SelectableList>
            </Paper>
        </div>
    </div>
)
