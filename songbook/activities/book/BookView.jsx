import React from 'react'
// import {FormattedMessage} from 'react-intl'
import {IconButton, List, ListItem, Paper, Subheader, makeSelectable} from 'material-ui'
import ActionFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

const SelectableList = makeSelectable(List);

export const BookView = ({data, onNavRequest}) => (
    <div className='songbook-content'>
        <Paper className="paper-responsive">
            <SelectableList onChange={onNavRequest}>
                <Subheader>♥ to include in My Songbook</Subheader>
                <Subheader className="not-implemented">Actually, it is not implemented yet.</Subheader>
                {data.map(link => (
                    <ListItem key={link}
                              primaryText={link}
                              rightIconButton={<IconButton>{false ? <ActionFavoriteIcon/> : <ActionFavoriteBorderIcon/>}</IconButton>}
                              value={link}/>
                ))}
            </SelectableList>
        </Paper>
    </div>
)
