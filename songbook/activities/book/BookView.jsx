import React from 'react'
import Fuse from 'fuse.js'
import {FormattedMessage as T} from 'react-intl'
import {IconButton, List, ListItem, Paper, Subheader, makeSelectable} from 'material-ui'
import ActionFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import {asciify, m} from '../../utils'

const MIN_MATCH_LEN = 1

const SelectableList = makeSelectable(List)

const has_funnychars = s => (asciify(s) != s.toLowerCase())

export class BookView extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.next_state_from_props(props)
    }

    componentWillReceiveProps(next_props) {
        let next_state = this.next_state_from_props(next_props)
        if (next_props.query) this.nav_if_single_item(next_state.items)
        this.setState(this.next_state_from_props(next_props))
    }

    componentDidMount() {
        if (this.props.query) this.nav_if_single_item(this.state.items)
    }

    nav_if_single_item = (items) => {
        if (items.length == 1) this.props.onNavRequest(items[0].ref)
    }

    next_state_from_props = (props) => {
        let next_state = {}
        if (props.data.contents != this.props.data.contents || !this.state || !this.state.fuse) {
            next_state.fuse = this.fuse_new(props.data.contents)
        }
        if (props.query.length >= MIN_MATCH_LEN) {
            let fuse = next_state.fuse || this.state.fuse
            let q = has_funnychars(props.query) ? props.query : props.query.toLowerCase()
            next_state.items = fuse.search(q)
        } else {
            next_state.items = props.data.contents
        }
        return m(this.state || {}, next_state)
    }


    fuse_getFn = (obj, path) => {
        return has_funnychars(this.props.query) ? obj[path] : asciify(obj[path])
    }

    fuse_new = (items) => (new Fuse(items, {
            shouldSort: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: MIN_MATCH_LEN,
            keys: [{name: 'title', weight: 0.7}, {name: 'artist', weight: 0.3}],
            getFn: this.fuse_getFn,
        })
    )

    render() {
        return (
            <div className="content-wrapper">
                <div className='content padded'>
                    <Paper className="paper-responsive">
                        <SelectableList onChange={(e, val) => this.props.onNavRequest(val)}>
                            <Subheader>{this.props.data.title}</Subheader>
                            {this.state.items.map(({error, title, artist, ref}) => (
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
}
BookView.propTypes = {
    data:         React.PropTypes.object.isRequired,
    query:        React.PropTypes.string,
    onNavRequest: React.PropTypes.func.isRequired,
}
