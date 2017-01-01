import React from 'react'
// import {FormattedMessage} from 'react-intl'


import {IconButton, List, ListItem, Paper, Subheader, makeSelectable} from 'material-ui'
import ActionFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import {SearchAppBar} from '../../container'

export const SongView = ({data, onSearch}) => (
    <div className="content-wrapper">
        <SearchAppBar onSearch={onSearch} />
        <div className='content padded song-view'>
            {data.title}
        </div>
    </div>
)
